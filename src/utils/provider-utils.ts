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
    case '(ISC)²':
      return 'https://www.isc2.org/-/media/ISC2/Landing-Pages/ISC2-Logo.ashx';
    case 'Scrum.org':
      return 'https://www.scrum.org/themes/custom/scrumorg_v2/assets/images/logo-250.png';
    case 'Meta':
      return 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1280px-Meta_Platforms_Inc._logo.svg.png';
    case 'Linux Foundation':
      return 'https://training.linuxfoundation.org/wp-content/uploads/2018/12/logo_lf_training_horizontal_color_rgb.svg';
    case 'CompTIA':
      return 'https://comptiacdn.azureedge.net/webcontent/images/default-source/sitecore-images/logos/comptia_logo.svg';
    case 'Salesforce':
      return 'https://www.salesforce.com/news/wp-content/uploads/sites/3/2021/05/Salesforce-logo.jpg';
    case 'Oracle':
      return 'https://www.oracle.com/a/ocom/img/oracle-logo.svg';
    case 'PMI':
      return 'https://www.pmi.org/-/media/pmi/other-images/about/pmi-logo-primary-without-tag.png';
    case 'Cisco':
      return 'https://www.cisco.com/c/dam/en/us/td/i/200/206/2062/cisco-logo.jpg';
    case 'EC-Council':
      return 'https://www.eccouncil.org/wp-content/uploads/2022/10/ec-council-logo-vector.png';
    case 'MongoDB':
      return 'https://webimages.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png';
    case 'Unity':
      return 'https://seeklogo.com/images/U/unity-logo-988A22E703-seeklogo.com.png';
    case 'Databricks':
      return 'https://www.databricks.com/wp-content/uploads/2022/09/db-nav-logo.svg';
    case 'Scrum Alliance':
      return 'https://scrumorg-website-prod.s3.amazonaws.com/drupal/inline-images/2022-09/scrumalliance.png';
    case 'ISACA':
      return 'https://www.isaca.org/-/media/isaca/logos/isaca-logo-web-white-background.png';
    case 'HashiCorp':
      return 'https://www.datocms-assets.com/2885/1620155116-brandhashicorp-fullwordmarkcolorrgb.svg';
    case 'Confluent':
      return 'https://cdn.confluent.io/wp-content/uploads/confluent-logo-300.png';
    case 'CFA Institute':
      return 'https://www.cfainstitute.org/-/media/images/logos/cfa-charter-logo-blue.svg';
    default:
      return 'https://via.placeholder.com/150?text=' + provider;
  }
};