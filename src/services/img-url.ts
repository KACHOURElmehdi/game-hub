const getCroppedImageUrl = (url: string) =>{
    const target = 'media/';
    
    const index = url.indexOf(target) + target.length;

    // Insert 'crop/600/400/' right after 'media/' in the URL and return the new URL
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
}

export default getCroppedImageUrl;