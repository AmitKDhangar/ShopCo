import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProfile, updateProfile } from "../slices/editprofile";
const EditProfile = () => {
  const profileDetails = useSelector((state) => state.editprofile);
  console.log(profileDetails);

  const dispatchAction = useDispatch();

  const [profile, setprofile] = useState(() => {
    return profileDetails.length === 1
      ? profileDetails[0]?.profile
      : "https://pfpmaker.com/content/img/profile-pictures/aesthetic/4.png";
  });

  const editProfileFields = {
    profile: "",
    name: "",
    address: "",
    mobilenumber: "",
    email: "",
    country: "",
  };
  const [profilefields, setprofilefields] = useState(editProfileFields);

  const [err, seterr] = useState();

  // handling changes in the field
  const handleChange = (e) => {
    const { name, value } = e.target;
    setprofilefields((prev) => ({ ...prev, [name]: value }));
  };

  const error = {};
  // validation
  const validationForm = () => {
    if (!profilefields?.name?.trim()) {
      error.name = "Please enter your Name";
    } else if (!profilefields?.address?.trim()) {
      error.address = "Please enter your address";
    } else if (!profilefields?.mobilenumber.trim()) {
      error.mobilenumber = "Please enter your mobile number";
    } else if (!profilefields?.email?.trim()) {
      error.email = "Please enter your email";
    } else if (!profilefields?.country?.trim()) {
      error.select = "Please select your country";
    } else if (profilefields.country.trim()) {
      handleUpdationandSubmit();
    }
    seterr(error);
  };

  const [isupdate, setisupdate] = useState(false);
  // imageValidator
  const Imagevalidator = (url) => {
    try {
      const parsed = new URL(url);
      return (
        /^https?:/.test(parsed.protocol) &&
        /\.(jpg|jpeg|png|gif|webp|svg)(\?.*)?$/.test(parsed.pathname)
      );
    } catch {
      return false;
    }
  };

  // handleProfilePhoto
  const handleProfilePhoto = () => {
    const url = prompt("Enter Your Profile URL");
    if (url) {
      const res = Imagevalidator(url);
      if (res) {
        alert("Profile is updated successfully");
        setprofile(url);
      } else {
        alert("Format of your photo is not valid");
      }
    }
  };

  // Profile Updation
  const handleUpdationandSubmit = () => {
    let updatedProfileDetails;
    updatedProfileDetails = { ...profilefields, profilephoto: profile };
    setprofilefields(editProfileFields);
    if (!isupdate) {
      if (!profileDetails[0]) {
        dispatchAction(addProfile(updatedProfileDetails));
      }
      setisupdate(!isupdate);
    }
    setprofilefields(profilefields);
    console.log(updateProfile);
    
    dispatchAction(updateProfile(updatedProfileDetails));
    setisupdate(!isupdate);
  };
  return (
    <div className="editprofile">
      <div className="heading-edit xs:mx-2 xs:my-1">
        <h1 className="text-bold xs:text-[20px] lg:text-[25px] font-extrabold">
          Edit Your Profile
        </h1>
      </div>
      <div className="editprofile-fields bg-white xs:mx-4">
        <div className="profile ">
          <div className="image-container flex justify-center items-center flex-col rounded-2xl xs:p-1.5">
            <div className="edit-image flex justify-center items-end border-2 border-dotted border-black rounded-full">
              <img
                src={profile}
                alt=""
                className="h-36 cursor-pointer xs:h-[130px] lg:h-44 p-1 bg-cover rounded-full object-fit"
                onChange={handleChange}
              />
              <div
                className="edit-option flex items-center justify-center absolute bg-white xs:h-5 xs:w-5 lg:h-8 lg:w-8 rounded-full border-2 border-gray-400 cursor-pointer"
                onClick={handleProfilePhoto}
              >
                <i class="ri-pencil-line"></i>
              </div>
            </div>
            <div className="username">
              <p>
                {profileDetails.length === 1
                  ? profileDetails[0]?.name
                  : "Lorem Singh"}
              </p>
            </div>
          </div>
        </div>
        <div className="form-container flex justify-center items-center">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              validationForm();
            }}
            className="bg-black rounded-tr-[3rem] rounded-bl-[3rem] xs:w-full lg:w-[50%] py-1.5 px-2"
          >
            <div className="field flex items-center xs:m-3">
              <div className="label w-[20%]">
                <p className="mr-2">Name</p>
              </div>
              <div className="field-wrapper w-[75%]">
                {isupdate ? (
                  <div className="username-container w-[75%]">
                    <p className="text-red-400">{profileDetails[0].name}</p>
                  </div>
                ) : (
                  <>
                    <div className="field-container flex justify-center items-center w-[100%] bg-white xs:rounded-md">
                      <i className="ri-user-settings-line xs:m-0.5"></i>
                      <input
                        type="text"
                        name="name"
                        className="border xs:rounded-md flex-1 outline-none "
                        value={profilefields?.name}
                        onChange={handleChange}
                      />
                    </div>
                    {err && <p className="error p-0.5">{err.name}</p>}
                  </>
                )}
              </div>
            </div>
            {/* Address Field */}
            <div className="field flex items-center xs:m-1.5">
              <div className="label w-[20%]">
                <p className="">Address</p>
              </div>
              <div className="field-wrapper w-[75%]">
                {isupdate ? (
                  <div className="address-container">
                    <p>{profileDetails[0].address}</p>
                  </div>
                ) : (
                  <>
                    <div className="field-container flex w-full bg-white xs:rounded-md">
                      <i className="ri-map-pin-add-line xs:m-0.5"></i>
                      <input
                        type="text"
                        name="address"
                        className="border xs:rounded-md flex-1 outline-none "
                        value={profilefields?.address}
                        onChange={handleChange}
                      />
                    </div>
                    {err && <p className="error p-0.5">{err.address}</p>}
                  </>
                )}
              </div>
            </div>
            {/* Mobile Number Field */}
            <div className="field flex items-center xs:m-3">
              <div className="label w-[20%]">
                <p className="mr-1">Mobile Number</p>
              </div>
              <div className="field-wrapper w-[75%]">
                {isupdate ? (
                  <div className="mobile-number">
                    <p>{profileDetails[0].mobilenumber}</p>
                  </div>
                ) : (
                  <>
                    {" "}
                    <div className="field-container flex w-full bg-white xs:rounded-md">
                      <i className="ri-phone-line xs:m-0.5"></i>
                      <input
                        type="text"
                        name="mobilenumber"
                        className="border xs:rounded-md flex-1 outline-none "
                        value={profilefields?.mobilenumber}
                        onChange={handleChange}
                      />
                    </div>
                    {err && <p className="error p-0.5">{err.mobilenumber}</p>}
                  </>
                )}
              </div>
            </div>

            {/* Email Field */}
            <div className="field flex items-center xs:m-3">
              <div className="label w-[20%]">
                <p className="mr-1">E-mail</p>
              </div>
              <div className="field-wrapper w-[75%]">
                {isupdate ? (
                  <div className="email-address-containe">
                    {<p>{profileDetails[0].email}</p>}
                  </div>
                ) : (
                  <>
                    <div className="field-container flex w-full bg-white xs:rounded-md">
                      <i className="ri-mail-settings-line xs:m-0.5"></i>
                      <input
                        type="email"
                        name="email"
                        className="border xs:rounded-md flex-1 outline-none"
                        value={profilefields?.email}
                        onChange={handleChange}
                      />
                    </div>
                    {err && <p className="error p-0.5">{err.email}</p>}
                  </>
                )}
              </div>
            </div>

            {/* Country Field */}
            <div className="field flex items-center xs:m-3">
              <div className="label w-[20%]">
                <p className="mr-1">Country</p>
              </div>
              <div className="field-wrapper w-[75%]">
                {isupdate ? (
                  <div className="country-container">
                    <p>{profileDetails[0].country}</p>
                  </div>
                ) : (
                  <>
                    <div className="field-container flex w-full bg-white xs:rounded-md">
                      <i className="ri-earth-line xs:m-0.5"></i>
                      <select
                        id="country"
                        className="border xs:rounded-md flex-1 outline-none xs:w-[75%]"
                        value={profilefields?.country}
                        name="country"
                        onChange={handleChange}
                      >
                        <option value="">Select Country</option>
                        <option value="India">🇮🇳 India</option>
                        <option value="USA">🇺🇸 USA</option>
                        <option value="UK">🇬🇧 United Kingdom</option>
                        <option value="Afghanistan">🇦🇫 Afghanistan</option>
                        <option value="Albania">🇦🇱 Albania</option>
                        <option value="Algeria">🇩🇿 Algeria</option>
                        <option value="Andorra">🇦🇩 Andorra</option>
                        <option value="Angola">🇦🇴 Angola</option>
                        <option value="Antigua and Barbuda">
                          🇦🇬 Antigua and Barbuda
                        </option>
                        <option value="Argentina">🇦🇷 Argentina</option>
                        <option value="Armenia">🇦🇲 Armenia</option>
                        <option value="Australia">🇦🇺 Australia</option>
                        <option value="Austria">🇦🇹 Austria</option>
                        <option value="Azerbaijan">🇦🇿 Azerbaijan</option>
                        <option value="Bahamas">🇧🇸 Bahamas</option>
                        <option value="Bahrain">🇧🇭 Bahrain</option>
                        <option value="Bangladesh">🇧🇩 Bangladesh</option>
                        <option value="Barbados">🇧🇧 Barbados</option>
                        <option value="Belarus">🇧🇾 Belarus</option>
                        <option value="Belgium">🇧🇪 Belgium</option>
                        <option value="Belize">🇧🇿 Belize</option>
                        <option value="Benin">🇧🇯 Benin</option>
                        <option value="Bhutan">🇧🇹 Bhutan</option>
                        <option value="Bolivia">🇧🇴 Bolivia</option>
                        <option value="Bosnia and Herzegovina">
                          🇧🇦 Bosnia and Herzegovina
                        </option>
                        <option value="Botswana">🇧🇼 Botswana</option>
                        <option value="Brazil">🇧🇷 Brazil</option>
                        <option value="Brunei">🇧🇳 Brunei</option>
                        <option value="Bulgaria">🇧🇬 Bulgaria</option>
                        <option value="Burkina Faso">🇧🇫 Burkina Faso</option>
                        <option value="Burundi">🇧🇮 Burundi</option>
                        <option value="Cabo Verde">🇨🇻 Cabo Verde</option>
                        <option value="Cambodia">🇰🇭 Cambodia</option>
                        <option value="Cameroon">🇨🇲 Cameroon</option>
                        <option value="Canada">🇨🇦 Canada</option>
                        <option value="Central African Republic">
                          🇨🇫 Central African Republic
                        </option>
                        <option value="Chad">🇹🇩 Chad</option>
                        <option value="Chile">🇨🇱 Chile</option>
                        <option value="China">🇨🇳 China</option>
                        <option value="Colombia">🇨🇴 Colombia</option>
                        <option value="Comoros">🇰🇲 Comoros</option>
                        <option value="Congo (Congo-Brazzaville)">
                          🇨🇬 Congo (Congo-Brazzaville)
                        </option>
                        <option value="Costa Rica">🇨🇷 Costa Rica</option>
                        <option value="Croatia">🇭🇷 Croatia</option>
                        <option value="Cuba">🇨🇺 Cuba</option>
                        <option value="Cyprus">🇨🇾 Cyprus</option>
                        <option value="Czechia">🇨🇿 Czechia</option>
                        <option value="Democratic Republic of the Congo">
                          🇨🇩 Democratic Republic of the Congo
                        </option>
                        <option value="Denmark">🇩🇰 Denmark</option>
                        <option value="Djibouti">🇩🇯 Djibouti</option>
                        <option value="Dominica">🇩🇲 Dominica</option>
                        <option value="Dominican Republic">
                          🇩🇴 Dominican Republic
                        </option>
                        <option value="Ecuador">🇪🇨 Ecuador</option>
                        <option value="Egypt">🇪🇬 Egypt</option>
                        <option value="El Salvador">🇸🇻 El Salvador</option>
                        <option value="Equatorial Guinea">
                          🇬🇶 Equatorial Guinea
                        </option>
                        <option value="Eritrea">🇪🇷 Eritrea</option>
                        <option value="Estonia">🇪🇪 Estonia</option>
                        <option value="Eswatini">🇸🇿 Eswatini</option>
                        <option value="Ethiopia">🇪🇹 Ethiopia</option>
                        <option value="Fiji">🇫🇯 Fiji</option>
                        <option value="Finland">🇫🇮 Finland</option>
                        <option value="France">🇫🇷 France</option>
                        <option value="Gabon">🇬🇦 Gabon</option>
                        <option value="Gambia">🇬🇲 Gambia</option>
                        <option value="Georgia">🇬🇪 Georgia</option>
                        <option value="Germany">🇩🇪 Germany</option>
                        <option value="Ghana">🇬🇭 Ghana</option>
                        <option value="Greece">🇬🇷 Greece</option>
                        <option value="Grenada">🇬🇩 Grenada</option>
                        <option value="Guatemala">🇬🇹 Guatemala</option>
                        <option value="Guinea">🇬🇳 Guinea</option>
                        <option value="Guinea-Bissau">🇬🇼 Guinea-Bissau</option>
                        <option value="Guyana">🇬🇾 Guyana</option>
                        <option value="Haiti">🇭🇹 Haiti</option>
                        <option value="Honduras">🇭🇳 Honduras</option>
                        <option value="Hungary">🇭🇺 Hungary</option>
                        <option value="Iceland">🇮🇸 Iceland</option>
                        <option value="India">🇮🇳 India</option>
                        <option value="Indonesia">🇮🇩 Indonesia</option>
                        <option value="Iran">🇮🇷 Iran</option>
                        <option value="Iraq">🇮🇶 Iraq</option>
                        <option value="Ireland">🇮🇪 Ireland</option>
                        <option value="Israel">🇮🇱 Israel</option>
                        <option value="Italy">🇮🇹 Italy</option>
                        <option value="Jamaica">🇯🇲 Jamaica</option>
                        <option value="Japan">🇯🇵 Japan</option>
                        <option value="Jordan">🇯🇴 Jordan</option>
                        <option value="Kazakhstan">🇰🇿 Kazakhstan</option>
                        <option value="Kenya">🇰🇪 Kenya</option>
                        <option value="Kiribati">🇰🇮 Kiribati</option>
                        <option value="Kuwait">🇰🇼 Kuwait</option>
                        <option value="Kyrgyzstan">🇰🇬 Kyrgyzstan</option>
                        <option value="Laos">🇱🇦 Laos</option>
                        <option value="Latvia">🇱🇻 Latvia</option>
                        <option value="Lebanon">🇱🇧 Lebanon</option>
                        <option value="Lesotho">🇱🇸 Lesotho</option>
                        <option value="Liberia">🇱🇷 Liberia</option>
                        <option value="Libya">🇱🇾 Libya</option>
                        <option value="Liechtenstein">🇱🇮 Liechtenstein</option>
                        <option value="Lithuania">🇱🇹 Lithuania</option>
                        <option value="Luxembourg">🇱🇺 Luxembourg</option>
                        <option value="Madagascar">🇲🇬 Madagascar</option>
                        <option value="Malawi">🇲🇼 Malawi</option>
                        <option value="Malaysia">🇲🇾 Malaysia</option>
                        <option value="Maldives">🇲🇻 Maldives</option>
                        <option value="Mali">🇲🇱 Mali</option>
                        <option value="Malta">🇲🇹 Malta</option>
                        <option value="Marshall Islands">
                          🇲🇭 Marshall Islands
                        </option>
                        <option value="Mauritania">🇲🇷 Mauritania</option>
                        <option value="Mauritius">🇲🇺 Mauritius</option>
                        <option value="Mexico">🇲🇽 Mexico</option>
                        <option value="Micronesia">🇫🇲 Micronesia</option>
                        <option value="Moldova">🇲🇩 Moldova</option>
                        <option value="Monaco">🇲🇨 Monaco</option>
                        <option value="Mongolia">🇲🇳 Mongolia</option>
                        <option value="Montenegro">🇲🇪 Montenegro</option>
                        <option value="Morocco">🇲🇦 Morocco</option>
                        <option value="Mozambique">🇲🇿 Mozambique</option>
                        <option value="Myanmar">🇲🇲 Myanmar</option>
                        <option value="Namibia">🇳🇦 Namibia</option>
                        <option value="Nauru">🇳🇷 Nauru</option>
                        <option value="Nepal">🇳🇵 Nepal</option>
                        <option value="Netherlands">🇳🇱 Netherlands</option>
                        <option value="New Zealand">🇳🇿 New Zealand</option>
                        <option value="Nicaragua">🇳🇮 Nicaragua</option>
                        <option value="Niger">🇳🇪 Niger</option>
                        <option value="Nigeria">🇳🇬 Nigeria</option>
                        <option value="North Korea">🇰🇵 North Korea</option>
                        <option value="North Macedonia">
                          🇲🇰 North Macedonia
                        </option>
                        <option value="Norway">🇳🇴 Norway</option>
                        <option value="Oman">🇴🇲 Oman</option>
                        <option value="Pakistan">🇵🇰 Pakistan</option>
                        <option value="Palau">🇵🇼 Palau</option>
                        <option value="Palestine">🇵🇸 Palestine</option>
                        <option value="Panama">🇵🇦 Panama</option>
                        <option value="Papua New Guinea">
                          🇵🇬 Papua New Guinea
                        </option>
                        <option value="Paraguay">🇵🇾 Paraguay</option>
                        <option value="Peru">🇵🇪 Peru</option>
                        <option value="Philippines">🇵🇭 Philippines</option>
                        <option value="Poland">🇵🇱 Poland</option>
                        <option value="Portugal">🇵🇹 Portugal</option>
                        <option value="Qatar">🇶🇦 Qatar</option>
                        <option value="Romania">🇷🇴 Romania</option>
                        <option value="Russia">🇷🇺 Russia</option>
                        <option value="Rwanda">🇷🇼 Rwanda</option>
                        <option value="Saint Kitts and Nevis">
                          🇰🇳 Saint Kitts and Nevis
                        </option>
                        <option value="Saint Lucia">🇱🇨 Saint Lucia</option>
                        <option value="Saint Vincent and the Grenadines">
                          🇻🇨 Saint Vincent and the Grenadines
                        </option>
                        <option value="Samoa">🇼🇸 Samoa</option>
                        <option value="San Marino">🇸🇲 San Marino</option>
                        <option value="Sao Tome and Principe">
                          🇸🇹 Sao Tome and Principe
                        </option>
                        <option value="Saudi Arabia">🇸🇦 Saudi Arabia</option>
                        <option value="Senegal">🇸🇳 Senegal</option>
                        <option value="Serbia">🇷🇸 Serbia</option>
                        <option value="Seychelles">🇸🇨 Seychelles</option>
                        <option value="Sierra Leone">🇸🇱 Sierra Leone</option>
                        <option value="Singapore">🇸🇬 Singapore</option>
                        <option value="Slovakia">🇸🇰 Slovakia</option>
                        <option value="Slovenia">🇸🇮 Slovenia</option>
                        <option value="Solomon Islands">
                          🇸🇧 Solomon Islands
                        </option>
                        <option value="Somalia">🇸🇴 Somalia</option>
                        <option value="South Africa">🇿🇦 South Africa</option>
                        <option value="South Korea">🇰🇷 South Korea</option>
                        <option value="South Sudan">🇸🇸 South Sudan</option>
                        <option value="Spain">🇪🇸 Spain</option>
                        <option value="Sri Lanka">🇱🇰 Sri Lanka</option>
                        <option value="Sudan">🇸🇩 Sudan</option>
                        <option value="Suriname">🇸🇷 Suriname</option>
                        <option value="Sweden">🇸🇪 Sweden</option>
                        <option value="Switzerland">🇨🇭 Switzerland</option>
                        <option value="Syria">🇸🇾 Syria</option>
                        <option value="Tajikistan">🇹🇯 Tajikistan</option>
                        <option value="Tanzania">🇹🇿 Tanzania</option>
                        <option value="Thailand">🇹🇭 Thailand</option>
                        <option value="Timor-Leste">🇹🇱 Timor-Leste</option>
                        <option value="Togo">🇹🇬 Togo</option>
                        <option value="Tonga">🇹🇴 Tonga</option>
                        <option value="Trinidad and Tobago">
                          🇹🇹 Trinidad and Tobago
                        </option>
                        <option value="Tunisia">🇹🇳 Tunisia</option>
                        <option value="Turkey">🇹🇷 Turkey</option>
                        <option value="Turkmenistan">🇹🇲 Turkmenistan</option>
                        <option value="Tuvalu">🇹🇻 Tuvalu</option>
                        <option value="Uganda">🇺🇬 Uganda</option>
                        <option value="Ukraine">🇺🇦 Ukraine</option>
                        <option value="United Arab Emirates">
                          🇦🇪 United Arab Emirates
                        </option>
                        <option value="United Kingdom">
                          🇬🇧 United Kingdom
                        </option>
                        <option value="United States">🇺🇸 United States</option>
                        <option value="Uruguay">🇺🇾 Uruguay</option>
                        <option value="Uzbekistan">🇺🇿 Uzbekistan</option>
                        <option value="Vanuatu">🇻🇺 Vanuatu</option>
                        <option value="Vatican City">🇻🇦 Vatican City</option>
                        <option value="Venezuela">🇻🇪 Venezuela</option>
                        <option value="Vietnam">🇻🇳 Vietnam</option>
                        <option value="Yemen">🇾🇪 Yemen</option>
                        <option value="Zambia">🇿🇲 Zambia</option>
                        <option value="Zimbabwe">🇿🇼 Zimbabwe</option>
                      </select>
                    </div>
                    {err && <p className="error p-0.5">{err.select}</p>}
                  </>
                )}
              </div>
            </div>
            <div className="btn-container flex justify-center items-center w-full">
              <button
                className="bg-white w-[30%] text-black py-1 xs:rounded-xl"
                type="submit"
              >
                {isupdate ? "Update" : "Save"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
