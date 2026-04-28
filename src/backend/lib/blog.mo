import List "mo:core/List";
import Time "mo:core/Time";
import Types "../types/blog";

module {
  public func create(
    posts : List.List<Types.BlogPost>,
    nextId : Nat,
    title : Text,
    excerpt : Text,
    content : Text,
    category : Text,
    tags : [Text],
    readTime : Text,
  ) : Types.BlogPost {
    if (title.size() == 0) Runtime.trap("title required");
    let post : Types.BlogPost = {
      id = nextId;
      title;
      excerpt;
      content;
      category;
      tags;
      readTime;
      publishedAt = Time.now();
      isPublished = true;
    };
    posts.add(post);
    post;
  };

  public func getAll(posts : List.List<Types.BlogPost>) : [Types.BlogPost] {
    posts.toArray();
  };

  public func getById(posts : List.List<Types.BlogPost>, id : Nat) : ?Types.BlogPost {
    posts.find(func(p) { p.id == id });
  };

  public func delete(posts : List.List<Types.BlogPost>, id : Nat) : Bool {
    let before = posts.size();
    let filtered = posts.filter(func(p) { p.id != id });
    posts.clear();
    posts.append(filtered);
    posts.size() < before;
  };
};
