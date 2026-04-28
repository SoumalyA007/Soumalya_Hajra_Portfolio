module {
  public type ContactMessage = {
    id : Nat;
    name : Text;
    email : Text;
    message : Text;
    timestamp : Int;
  };

  public type SubmitResult = {
    #ok : Nat;
    #err : Text;
  };
};
