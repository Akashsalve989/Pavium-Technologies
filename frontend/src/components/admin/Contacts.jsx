import { useEffect, useState } from "react";
import axios from "axios";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/contact");
      setContacts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteContact = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this contact?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:8080/api/contact/${id}`);

      alert("Contact Deleted Successfully");

      loadContacts();
    } catch (err) {
      console.error(err);
      alert("Delete Failed");
    }
  };

  return (
    <div>
      <h2 style={{ marginBottom: "20px" }}>Contact Messages</h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          background: "#fff",
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <thead>
          <tr style={{ background: "#2563eb", color: "#fff" }}>
            <th style={{ padding: "12px" }}>ID</th>
            <th style={{ padding: "12px" }}>Name</th>
            <th style={{ padding: "12px" }}>Email</th>
            <th style={{ padding: "12px" }}>Phone</th>
            <th style={{ padding: "12px" }}>Message</th>
            <th style={{ padding: "12px" }}>Action</th>
          </tr>
        </thead>

        <tbody>
          {contacts.length > 0 ? (
            contacts.map((c) => (
              <tr key={c.id}>
                <td style={{ padding: "12px", borderBottom: "1px solid #eee" }}>
                  {c.id}
                </td>

                <td style={{ padding: "12px", borderBottom: "1px solid #eee" }}>
                  {c.name}
                </td>

                <td style={{ padding: "12px", borderBottom: "1px solid #eee" }}>
                  {c.email}
                </td>

                <td style={{ padding: "12px", borderBottom: "1px solid #eee" }}>
                  {c.phone}
                </td>

                <td style={{ padding: "12px", borderBottom: "1px solid #eee" }}>
                  {c.message}
                </td>

                <td style={{ padding: "12px", borderBottom: "1px solid #eee" }}>
                  <button
                    onClick={() => deleteContact(c.id)}
                    style={{
                      background: "#dc2626",
                      color: "#fff",
                      border: "none",
                      padding: "8px 15px",
                      borderRadius: "6px",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="6"
                style={{
                  textAlign: "center",
                  padding: "20px",
                }}
              >
                No Contact Messages Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;