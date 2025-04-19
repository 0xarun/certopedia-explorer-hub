
export const getProviderLogo = (provider: string): string => {
  switch (provider) {
    case 'Google':
      return 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';
    case 'AWS':
      return 'https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png';
    case 'Microsoft':
      return 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31';
    case 'IBM':
      return 'https://1000logos.net/wp-content/uploads/2017/02/IBM-Logo.png';
    case 'Coursera':
      return 'https://about.coursera.org/images/logos/coursera-logo-full-rgb.png';
    case 'edX':
      return 'https://www.edx.org/images/logos/edx-logo-elm.svg';
    case 'Udacity':
      return 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Udacity_logo.svg/1280px-Udacity_logo.svg.png';
    case 'Udemy':
      return 'https://s.udemycdn.com/meta/default-meta-image-v2.png';
    case 'Pluralsight':
      return 'https://www.pluralsight.com/content/dam/pluralsight2/general/brand/logos/pluralsight-logo-vrt-wht-1.png';
    default:
      return 'https://via.placeholder.com/150?text=' + provider;
  }
};
