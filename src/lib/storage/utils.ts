export function extractPublicId(url: string) {
    try {
      const parts = url.split("/");
  
      // find "upload" index
      const uploadIndex = parts.findIndex(p => p === "upload");
  
      // everything after "upload"
      const publicParts = parts.slice(uploadIndex + 2); 
      // +2 skips "upload" and version (v123...)
  
      const fullPath = publicParts.join("/");
  
      // remove file extension
      return fullPath.replace(/\.[^/.]+$/, "");
    } catch (err) {
      console.error("Failed to extract publicId", err);
      return null;
    }
  }
  