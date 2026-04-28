import Time "mo:core/Time";
import Types "../types/profile";

module {
  public func get(image : ?Types.ProfileImage) : ?Types.ProfileImage {
    image;
  };

  public func set(key : Text, url : Text) : Types.ProfileImage {
    {
      key;
      url;
      updatedAt = Time.now();
    };
  };
};
