import React from "react"; 
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <div className="mt-16">
      <footer
        className="text-white py-4 text-center"
        style={{ backgroundColor: "#24262b" }}
      >
        <div className="container mx-auto">
          <br />
          <div className="container mx-auto flex flex-col items-center justify-center">
          <div className="mb-6">
          <div className="flex space-x-4">
            <SocialIcon
              url="#"
              network="google"
              bgColor="#333"
              style={{ height: 25, width: 25 }}
            />
            <SocialIcon
              url="#"
              network="linkedin"
              bgColor="#333"
              style={{ height: 25, width: 25 }}
            />
            <SocialIcon
              url="#"
              network="twitter"
              bgColor="#333"
              style={{ height: 25, width: 25 }}
            />
            <SocialIcon
              url="#"
              network="facebook"
              bgColor="#333"
              style={{ height: 25, width: 25 }}
            />
            <SocialIcon
              url="#"
              network="instagram"
              bgColor="#333"
              style={{ height: 25, width: 25 }}
            />
          </div>
        </div>
        </div>
          <hr className="w-3/4 mx-auto mb-6 h-0.5 bg-gray-500" />
          <div className="flex w-3/4 m-auto flex-col sm:flex-row justify-between">
            <p className="text-sm text-gray-400 mb-2 sm:mb-0">
              © {new Date().getFullYear()} Copyright KEPSA
            </p>
            <p className="text-sm text-gray-400">All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
