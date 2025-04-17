const getStoredBook = () => {
    const storedBookString = localStorage.getItem("readList");
    if(storedBookString) {
        const ConvertedStoredBookData = JSON.parse(storedBookString);
        return ConvertedStoredBookData;
    }
    else {
        return [];
    }
};

const addToStoredDB = id => {
    const storedBookItem = getStoredBook();
    if(storedBookItem.includes(id)){
        alert("Book already exits")
    }
    else {
        storedBookItem.push(id);
        const ConvertedData = JSON.stringify(storedBookItem);
        localStorage.setItem("readList",ConvertedData);
    }
};

export {addToStoredDB, getStoredBook};