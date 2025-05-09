
export function timeAgo(dateStr: string): string {
    const inputDate = new Date(dateStr.replace(' ', 'T')); // convert to valid ISO format
    const now = new Date();
    const seconds = Math.floor((now.getTime() - inputDate.getTime()) / 1000);
  
    const intervals: { label: string; seconds: number }[] = [
      { label: 'year', seconds: 31536000 },
      { label: 'month', seconds: 2592000 },
      { label: 'week', seconds: 604800 },
      { label: 'day', seconds: 86400 },
      { label: 'hour', seconds: 3600 },
      { label: 'minute', seconds: 60 },
      { label: 'second', seconds: 1 },
    ];
  
    for (const interval of intervals) {
      const count = Math.floor(seconds / interval.seconds);
      if (count >= 1) {
        return `${count} ${interval.label}${count !== 1 ? 's' : ''} ago`;
      }
    }
  
    return 'just now';
  }
  

 export  function upperCaseFirstLetter (data: string){
    if(!data) return
    const names = data.split(' ')
    const upperCaseNames : string[] = [] 

    names.forEach((name)=>{
      const fisrtLetter = name.slice(0,1).toLocaleUpperCase()
      const remainingLetters = name.slice(1).toLocaleLowerCase()
      upperCaseNames.push(fisrtLetter + remainingLetters)
    })

    return upperCaseNames.join(' ')
  }
