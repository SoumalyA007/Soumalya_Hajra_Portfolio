import List "mo:core/List";
import ContactLib "../lib/contact";
import Types "../types/contact";

mixin (
  messages : List.List<Types.ContactMessage>,
) {
  public func submitContact(name : Text, email : Text, message : Text) : async Types.SubmitResult {
    let id = ContactLib.submit(messages, name, email, message);
    #ok(id);
  };

  public query func getContacts() : async [Types.ContactMessage] {
    ContactLib.getAll(messages);
  };
};
