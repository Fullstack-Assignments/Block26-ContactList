import { useState, useEffect } from "react";

export default function SelectedContact({
  selectedContactId,
  setSelectedContactId,
}) {
  const [contact, setContact] = useState(setSelectedContactId);
  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch(
          `https://jsonplace-univclone.herokuapp.com/users/${selectedContactId}`
        );
        const result = await response.json();
        setContact(result);
      } catch (error) {
        console.error(error);
      }
    }
  }, []);
  fetchContacts();
  //return ();
}
