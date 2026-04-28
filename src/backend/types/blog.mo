module {
  public type BlogPost = {
    id : Nat;
    title : Text;
    excerpt : Text;
    content : Text;
    category : Text;
    tags : [Text];
    readTime : Text;
    publishedAt : Int;
    isPublished : Bool;
  };

  public type CreateBlogResult = {
    #ok : BlogPost;
    #err : Text;
  };
};
