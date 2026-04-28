import List "mo:core/List";
import Time "mo:core/Time";
import Types "../types/contact";

module {
  public func submit(
    messages : List.List<Types.ContactMessage>,
    name : Text,
    email : Text,
    message : Text,
  ) : Nat {
    if (name.size() == 0) Runtime.trap("name required");
    if (email.size() == 0) Runtime.trap("email required");
    if (message.size() == 0) Runtime.trap("message required");

    let id = messages.size();
    let entry : Types.ContactMessage = {
      id;
      name;
      email;
      message;
      timestamp = Time.now();
    };
    messages.add(entry);
    id;
  };

  public func getAll(messages : List.List<Types.ContactMessage>) : [Types.ContactMessage] {
    messages.toArray();
  };
};
