import List "mo:core/List";
import ContactTypes "types/contact";
import BlogTypes "types/blog";
import ProfileTypes "types/profile";
import ContactMixin "mixins/contact-api";
import BlogMixin "mixins/blog-api";
import ProfileMixin "mixins/profile-api";

actor {
  let contactMessages = List.empty<ContactTypes.ContactMessage>();
  let blogPosts = List.empty<BlogTypes.BlogPost>();
  let profileState : [var ?ProfileTypes.ProfileImage] = [var null];

  include ContactMixin(contactMessages);
  include BlogMixin(blogPosts);
  include ProfileMixin(profileState);
};
