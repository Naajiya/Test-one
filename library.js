const collection={
    "ikigai":{
        title:"Ikigai",
        author:"Francesc Miralles and Hector Garcia",
        year:"2016",
        availability:true
    }
}

class Library{
    constructor(title,author,year,availability){
        this.title=title,
        this.author=author,
        this.year=year,
        this.availability=availability       
    }

    displayAll(){
        console.log(collection);
        
    }

    addNewbook(book,title,author,year,availability){
        collection[book]={
            title:title,
            author:author,
            year:year,
            availability:availability
        }
        console.log(collection);
        
    }

    updateAail(book,availability){
        if(collection[book]){
            collection[book].availability=availability
        }else{
            console.log('book is not available');
            
        }
        
    }

    dltitem(book){
        if(collection[book]){
            delete collection[book]
        }
    }
}

const userone=new Library()

console.log('------display all book');
userone.displayAll()

console.log('----------add book');

userone.addNewbook('adujeevitham','adujeevitham','benyamin',2013,true)


console.log('---------upd avalbilty');

userone.updateAail("ikigai",false)
userone.displayAll()

console.log('---------------delete item');

userone.dltitem("ikigai")
userone.displayAll()