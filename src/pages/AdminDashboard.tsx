import React, { useState, useEffect } from 'react';
import { AdminDashboardData } from '../types';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from 'recharts';
import { certifications } from '@/data/certifications';
import { supabase } from '@/lib/supabase';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const ADMIN_KEY = 'mastertheblaster';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

// Mock data
const mockData: AdminDashboardData = {
  analytics: {
    totalCertifications: 74,
    totalUsers: 100,
    certificationsByProvider: [
      { provider: 'AWS', count: 15 },
      { provider: 'Google', count: 12 },
      { provider: 'Microsoft', count: 8 },
      { provider: 'IBM', count: 6 },
      { provider: 'Others', count: 33 },
    ],
    certificationsByLevel: [
      { level: 'Beginner', count: 20 },
      { level: 'Intermediate', count: 25 },
      { level: 'Advanced', count: 15 },
      { level: 'Expert', count: 14 },
    ],
    certificationsByPriceRange: [
      { range: '$0-100', count: 10 },
      { range: '$101-300', count: 25 },
      { range: '$301-500', count: 20 },
      { range: '$501+', count: 19 },
    ],
    userGrowth: [
      { date: '2024-01', count: 50 },
      { date: '2024-02', count: 65 },
      { date: '2024-03', count: 80 },
      { date: '2024-04', count: 100 },
    ],
  },
  users: [],
  certifications: [],
};

// Function to fetch user data from Supabase
const fetchUserData = async () => {
  try {
    // Get total user count from auth.users table
    const { data: users, error: usersError } = await supabase
      .from('auth.users')
      .select('id, email, created_at')
      .order('created_at', { ascending: true });

    if (usersError) {
      console.error('Error fetching users:', usersError);
      throw usersError;
    }

    console.log('Fetched users:', users); // Debug log

    // Process user growth data
    const userGrowth = users.reduce((acc: { [key: string]: number }, user) => {
      const date = new Date(user.created_at);
      const monthYear = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
      acc[monthYear] = (acc[monthYear] || 0) + 1;
      return acc;
    }, {});

    // Convert to array format for charts
    const userGrowthArray = Object.entries(userGrowth).map(([date, count]) => ({
      date,
      count,
    }));

    return {
      totalUsers: users.length,
      userGrowth: userGrowthArray,
    };
  } catch (error) {
    console.error('Error fetching user data:', error);
    return {
      totalUsers: 0,
      userGrowth: [],
    };
  }
};

// Function to process real-time data from certifications
const processRealTimeData = async (): Promise<AdminDashboardData> => {
  // Count certifications by provider
  const providerCount = certifications.reduce((acc, cert) => {
    acc[cert.provider] = (acc[cert.provider] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const certificationsByProvider = Object.entries(providerCount).map(([provider, count]) => ({
    provider: provider as any,
    count,
  }));

  // Count certifications by level
  const levelCount = certifications.reduce((acc, cert) => {
    acc[cert.level] = (acc[cert.level] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const certificationsByLevel = Object.entries(levelCount).map(([level, count]) => ({
    level: level as any,
    count,
  }));

  // Process price ranges
  const priceRanges = {
    '$0-100': 0,
    '$101-300': 0,
    '$301-500': 0,
    '$501+': 0,
  };

  certifications.forEach(cert => {
    const price = parseInt(cert.price.replace(/[^0-9]/g, ''));
    if (price <= 100) priceRanges['$0-100']++;
    else if (price <= 300) priceRanges['$101-300']++;
    else if (price <= 500) priceRanges['$301-500']++;
    else priceRanges['$501+']++;
  });

  const certificationsByPriceRange = Object.entries(priceRanges).map(([range, count]) => ({
    range,
    count,
  }));

  // Fetch user data from Supabase
  const userData = await fetchUserData();

  return {
    analytics: {
      totalCertifications: certifications.length,
      totalUsers: userData.totalUsers,
      certificationsByProvider,
      certificationsByLevel,
      certificationsByPriceRange,
      userGrowth: userData.userGrowth,
    },
    users: [],
    certifications,
  };
};

export default function AdminDashboard() {
  const [dataSource, setDataSource] = useState<'mock' | 'realtime'>('mock');
  const [dashboardData, setDashboardData] = useState<AdminDashboardData>(mockData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminKey, setAdminKey] = useState('');
  const [keyError, setKeyError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if admin key is stored in session storage
    const storedKey = sessionStorage.getItem('adminKey');
    if (storedKey === ADMIN_KEY) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleKeySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminKey === ADMIN_KEY) {
      setIsAuthenticated(true);
      sessionStorage.setItem('adminKey', adminKey);
      setKeyError(null);
    } else {
      setKeyError('Invalid admin key');
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    const updateData = async () => {
      if (dataSource === 'realtime') {
        setIsLoading(true);
        setError(null);
        try {
          const realTimeData = await processRealTimeData();
          setDashboardData(realTimeData);
        } catch (err) {
          console.error('Error updating dashboard data:', err);
          setError('Failed to fetch real-time data. Please try again.');
        } finally {
          setIsLoading(false);
        }
      } else {
        setDashboardData(mockData);
      }
    };

    if (isAuthenticated) {
      updateData();
    }
  }, [dataSource, isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <div className="container mx-auto p-6">
        <div className="max-w-md mx-auto mt-20">
          <Card>
            <CardHeader>
              <CardTitle>Admin Access</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleKeySubmit} className="space-y-4">
                <div>
                  <Input
                    type="password"
                    placeholder="Enter admin key"
                    value={adminKey}
                    onChange={(e) => setAdminKey(e.target.value)}
                    className="w-full"
                  />
                  {keyError && (
                    <p className="text-red-500 text-sm mt-1">{keyError}</p>
                  )}
                </div>
                <Button type="submit" className="w-full">
                  Access Dashboard
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <div className="flex items-center gap-4">
          <Select
            value={dataSource}
            onValueChange={(value: 'mock' | 'realtime') => setDataSource(value)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select data source" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mock">Mock Data</SelectItem>
              <SelectItem value="realtime">Real-time Data</SelectItem>
            </SelectContent>
          </Select>
          <Button
            variant="outline"
            onClick={() => {
              sessionStorage.removeItem('adminKey');
              setIsAuthenticated(false);
              navigate('/');
            }}
          >
            Logout
          </Button>
        </div>
      </div>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{error}</span>
        </div>
      )}
      
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <>
          {/* Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Total Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold">{dashboardData.analytics.totalCertifications}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Total Users</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold">{dashboardData.analytics.totalUsers}</p>
                {dataSource === 'realtime' && (
                  <p className="text-sm text-gray-500 mt-2">Real-time data from Supabase</p>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Certifications by Provider */}
            <Card>
              <CardHeader>
                <CardTitle>Certifications by Provider</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={dashboardData.analytics.certificationsByProvider}
                        dataKey="count"
                        nameKey="provider"
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        label
                      >
                        {dashboardData.analytics.certificationsByProvider.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Certifications by Level */}
            <Card>
              <CardHeader>
                <CardTitle>Certifications by Level</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={dashboardData.analytics.certificationsByLevel}
                        dataKey="count"
                        nameKey="level"
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        label
                      >
                        {dashboardData.analytics.certificationsByLevel.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Certifications by Price Range */}
            <Card>
              <CardHeader>
                <CardTitle>Certifications by Price Range</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={dashboardData.analytics.certificationsByPriceRange}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="range" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="count" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* User Growth */}
            <Card>
              <CardHeader>
                <CardTitle>User Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={dashboardData.analytics.userGrowth}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="count" stroke="#8884d8" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </>
      )}
    </div>
  );
} 