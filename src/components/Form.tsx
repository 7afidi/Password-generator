import { FormEvent, useState } from "react";
import PasswordSettings from "../PasswordSettings";
import { MdOutlineContentCopy } from "react-icons/md";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import InputField from "./InputField";

const Form = () => {
  const fieldStyle = {
    padding: "8px",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
  };
  const [password, setPassword] = useState<string>("");
  const [passwordSettings, setPasswordSettings] = useState<PasswordSettings>(
    new PasswordSettings(10, true, false, false, false)
  );

  const handlePasswordLengthChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordSettings(
      new PasswordSettings(
        parseInt(event.target.value),
        passwordSettings.upperCase,
        passwordSettings.lowerCase,
        passwordSettings.number,
        passwordSettings.symbol
      )
    );
  };

  const handleGenerate = (e: FormEvent) => {
    e.preventDefault();
    setPassword(passwordSettings.generatePassword());
  };
  const handleUpperCaseChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordSettings(
      new PasswordSettings(
        passwordSettings.length,
        event.target.checked,
        passwordSettings.lowerCase,
        passwordSettings.number,
        passwordSettings.symbol
      )
    );
  };
  const handleLowerCaseChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordSettings(
      new PasswordSettings(
        passwordSettings.length,
        passwordSettings.upperCase,
        event.target.checked,
        passwordSettings.number,
        passwordSettings.symbol
      )
    );
  };
  const handleIncludeNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordSettings(
      new PasswordSettings(
        passwordSettings.length,
        passwordSettings.upperCase,
        passwordSettings.lowerCase,
        event.target.checked,
        passwordSettings.symbol
      )
    );
  };
  const handleSymbolChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordSettings(
      new PasswordSettings(
        passwordSettings.length,
        passwordSettings.upperCase,
        passwordSettings.lowerCase,
        passwordSettings.number,
        event.target.checked
      )
    );
  };

  const handleCopy = () => {
    if (password !== "") {
      navigator.clipboard.writeText(password);
      enqueueSnackbar("Password copied to clipboard");
    }
  };
  const handleClear = () => {
    setPassword("");
  };

  return (
    <>
      <SnackbarProvider />
      <form style={{ width: 600 }} onSubmit={handleGenerate}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={password}
            disabled={true}
            placeholder="Your password will appear here"
            required
          />
          <MdOutlineContentCopy
            size={40}
            style={{ marginLeft: "20px" }}
            onClick={handleCopy}
          />
        </div>
        <label htmlFor="range">
          Length:{passwordSettings.length}
          <input
            type="range"
            min="0"
            max="100"
            id="range"
            onChange={handlePasswordLengthChange}
            value={passwordSettings.length}
            name="range"
          />
        </label>
        <InputField
          inputStyle={fieldStyle}
          handleChange={handleUpperCaseChange}
          inputTitle="Include UpperCase"
        />
        <InputField
          inputStyle={fieldStyle}
          handleChange={handleLowerCaseChange}
          inputTitle="Include LowerCase"
        />
        <InputField
          inputStyle={fieldStyle}
          handleChange={handleIncludeNumberChange}
          inputTitle="Include Numbers"
        />
        <InputField
          inputStyle={fieldStyle}
          handleChange={handleSymbolChange}
          inputTitle="Include Symbols"
        />

        <button type="submit" onClick={(e: FormEvent) => handleGenerate(e)}>
          Generate
        </button>
        <button type="button" onClick={handleClear}>
          Clear
        </button>
      </form>
    </>
  );
};

export default Form;
