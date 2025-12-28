import React, { useCallback, useEffect, useState, useRef } from "react";

export default function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [Password, setPassword] = useState("");
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);

  // use ref hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += "0123456789";
    if (char) str += "!@#$%^&*()+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let character = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(character);
    }
    setPassword(pass);
  }, [number, char, length, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,5)
    window.navigator.clipboard.writeText(Password);
  }, [Password]);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    passwordGenerator();
  }, [length, number, char, passwordGenerator]);
  return (
    <>
      <div className="bg-black w-full h-screen flex items-center justify-center ">
        <div className="w-full max-w-md mx-auto shadow-md rounded-lg mt-2   px-4 py-2 text-orange-500 bg-gray-700 ">
          <h1 className="text-2xl text-white text-center mb-6">
            Password Generator
          </h1>
          <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input
              type="text"
              ref={passwordRef}
              value={Password}
              placeholder="Password"
              readOnly
              className="bg-white outline-none w-full py-1 px-3"
            ></input>
            <button
              onClick={copyPasswordToClipboard}
              className="cursor-pointer outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 "
            >
              copy
            </button>
          </div>
          <div className="flex text-sm gap-x-2">
            <div className="flex items-center gap-x-1">
              <input
                type="range"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
                min={6}
                max={100}
                value={length}
                className="cursor-pointer"
              ></input>
              <label>Length : {length}</label>
            </div>

            <div className="flex items-center gapx-1">
              <input
                type="checkbox"
                onChange={() => {
                  setNumber((prev) => !prev);
                }}
              ></input>
              <label>Number</label>
            </div>

            <div className="flex items-center gapx-1">
              <input
                type="checkbox"
                onChange={() => {
                  setChar((prev) => !prev);
                }}
              ></input>
              <label>Character</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
