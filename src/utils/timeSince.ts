export const timeSince = (dateString: string) => {
    const today: any = new Date();
    const date: any = new Date(dateString);
    const seconds = Math.floor((today - date) / 1000);
  
    let interval = seconds / 31536000;
    if (interval > 1) {
      return `${Math.floor(interval)} year ago`;
    }
  
    interval = seconds / 2592000;
    if (interval > 1) {
      return `${Math.floor(interval)} months ago`;
    }
  
    interval = seconds / 86400;
    if (interval > 1) {
      return `${Math.floor(interval)} days ago`;
    }
  
    interval = seconds / 3600;
    if (interval > 1) {
      return `${Math.floor(interval)} hours ago`;
    }
  
    interval = seconds / 60;
    if (interval > 1) {
      return `${Math.floor(interval)} minutes ago`;
    }
    return `${Math.floor(seconds)} seconds ago`
  }