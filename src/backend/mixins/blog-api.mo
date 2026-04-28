import List "mo:core/List";
import BlogLib "../lib/blog";
import Types "../types/blog";

mixin (
  posts : List.List<Types.BlogPost>,
) {
  public func createBlog(
    title : Text,
    excerpt : Text,
    content : Text,
    category : Text,
    tags : [Text],
    readTime : Text,
  ) : async Types.CreateBlogResult {
    let nextId = posts.size();
    let post = BlogLib.create(posts, nextId, title, excerpt, content, category, tags, readTime);
    #ok(post);
  };

  public query func getBlogs() : async [Types.BlogPost] {
    BlogLib.getAll(posts);
  };

  public query func getBlog(id : Nat) : async ?Types.BlogPost {
    BlogLib.getById(posts, id);
  };

  public func deleteBlog(id : Nat) : async Bool {
    BlogLib.delete(posts, id);
  };
};
