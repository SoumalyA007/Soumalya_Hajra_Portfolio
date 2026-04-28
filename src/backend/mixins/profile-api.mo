import ProfileLib "../lib/profile";
import Types "../types/profile";

mixin (
  profileState : [var ?Types.ProfileImage],
) {
  public query func getProfileImage() : async ?Types.ProfileImage {
    ProfileLib.get(profileState[0]);
  };

  public func setProfileImage(key : Text, url : Text) : async Types.ProfileImage {
    let img = ProfileLib.set(key, url);
    profileState[0] := ?img;
    img;
  };
};
