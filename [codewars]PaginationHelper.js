function PaginationHelper(collection, itemsPerPage){
  this.itemsPerPage = itemsPerPage;
  this.collection = collection;
}

PaginationHelper.prototype.pageCount = function(){
  return Math.ceil(this.collection.length/this.itemsPerPage);
}

PaginationHelper.prototype.itemCount = function(){
  return this.collection.length;
}

PaginationHelper.prototype.pageItemCount = function(pageIndex){
  return pageIndex < 0 || pageIndex >= this.pageCount() ? -1 :    
    (pageIndex+1)*this.itemsPerPage > this.itemCount() ? 
    this.itemCount()%this.itemsPerPage : this.itemsPerPage;
}

PaginationHelper.prototype.pageIndex = function(itemIndex){
  return itemIndex>-1 && itemIndex<this.collection.length ?
    Math.floor((itemIndex+1)/this.itemsPerPage) : -1;
}

var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
console.log(helper.pageCount()); //should == 2
console.log(helper.itemCount()); //should == 6
console.log(helper.pageItemCount(0)); //should == 4
helper.pageItemCount(1); // last page - should == 2
helper.pageItemCount(2); // should == -1 since the page is invalid

// pageIndex takes an item index and returns the page that it belongs on
console.log(helper.pageIndex(5)); //should == 1 (zero based index)
helper.pageIndex(2); //should == 0
helper.pageIndex(20); //should == -1
helper.pageIndex(-10); //should == -1
/*
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
  return pageIndex < this.pageCount() 
    ? Math.min(this.itemsPerPage, this.collection.length - pageIndex * this.itemsPerPage)
    : -1;
}

PaginationHelper.prototype.pageIndex = function(itemIndex) {
  return itemIndex < this.collection.length && itemIndex >= 0
    ? Math.floor(itemIndex / this.itemsPerPage)
    : -1;
}
---------------------------------------------------------------------------------
class PaginationHelper {
  constructor(collection, itemsPerPage) {
    this.collection = collection
    this.itemsPerPage = itemsPerPage
    this.pages = Math.ceil(collection.length / itemsPerPage)
  }
  
  itemCount() {
    return this.collection.length
  }
  
  pageCount() {
    return this.pages
  }
  
  pageItemCount(pageIndex) {
    if (pageIndex >= this.pages || pageIndex < 0) {
      return -1
    } else if (pageIndex === this.pages - 1) {
      return (this.collection.length % this.itemsPerPage)
    } else {
      return this.itemsPerPage
    }
  }
  
  pageIndex(itemIndex) {
    if (itemIndex >= 0 && itemIndex < this.collection.length) {
      return Math.max(Math.ceil(itemIndex / this.itemsPerPage) - 1, 0)
    } else {
      return -1
    }
  }
}

----------------------------------------------------------------------------------
function PaginationHelper(collection, itemsPerPage){
  this.collection = collection;
  this.itemsPerPage = itemsPerPage;
  this.itemCount = function () { return this.collection.length; };
  this.pageCount = function () { return Math.ceil(this.collection.length / this.itemsPerPage); };
  this.pageItemCount = function (idx) {
    return this.pageCount() === ++idx ? this.itemCount() % this.itemsPerPage : this.pageCount() < ++idx ? -1 : this.itemsPerPage;
  };
  this.pageIndex = function (idx) {
    if (idx < 0) return -1;
    return ++idx > this.itemCount() ? -1 : ++idx === this.itemCount() ? this.pageCount() - 1 : idx / this.itemsPerPage ^ 0;
  }
}
*/