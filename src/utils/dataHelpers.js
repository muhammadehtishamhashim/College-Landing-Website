// Data validation and processing utilities

export const validateCollegeInfo = (data) => {
  const required = ['name', 'tagline', 'description', 'establishedYear'];
  return required.every(field => data && data[field]);
};

export const validateProgram = (program) => {
  const required = ['id', 'name', 'description', 'duration', 'eligibility'];
  return required.every(field => program && program[field]);
};

export const validateFacility = (facility) => {
  const required = ['id', 'name', 'description'];
  return required.every(field => facility && facility[field]);
};

export const formatPhoneNumber = (phone) => {
  if (!phone) return '';
  return phone.replace(/(\+91)(\d{3})(\d{3})(\d{4})/, '$1-$2-$3-$4');
};

export const formatDate = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const slugify = (text) => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

export const truncateText = (text, maxLength = 150) => {
  if (!text || text.length <= maxLength) return text;
  return text.substring(0, maxLength).replace(/\s+\S*$/, '') + '...';
};

// SEO helpers
export const generatePageTitle = (pageTitle, siteName = 'FG Science Degree College') => {
  return pageTitle ? `${pageTitle} | ${siteName}` : siteName;
};

export const generateMetaDescription = (content, maxLength = 160) => {
  if (!content) return 'FG Science Degree College - Excellence in Science Education';
  return truncateText(content, maxLength);
};