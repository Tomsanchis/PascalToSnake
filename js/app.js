export const pascaltosnake = (entry) => {
        let news = "";
        if (!isNaN(entry)) {
            return news += entry.toString();
        }
        for(let i = 0; i < entry.length; i++){
            if  (entry[i].match(/[A-Z]/) && i != 0) {
                news += "_"
                news += entry[i];
            } else  {
                news += entry[i];
            }
        }
        return news.toLowerCase();
}