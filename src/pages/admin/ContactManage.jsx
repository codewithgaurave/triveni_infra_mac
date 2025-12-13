import React, { useState, useEffect } from "react";
import axiosInstance from "../../../axiosInstance.jsx";
import Swal from "sweetalert2";
function ContactManage() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedContact, setSelectedContact] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // Mock data - in real app, this would come from your API
  const fetchcontectdata = async () => {
    try {
      const res = await axiosInstance.get(`/contact`);
      if (res.data.success) {
        setContacts(res.data.data.contacts);
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const deleteContact = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!"
    });

    if (!result.isConfirmed) return;

    try {
      const res = await axiosInstance.delete(`/contact/${id}`);
      if (res.data.success) {
        setContacts(contacts.filter((contact) => contact._id !== id));
        if (selectedContact?._id === id) setSelectedContact(null);
        
        Swal.fire({
          title: "Deleted!",
          text: "Contact has been deleted successfully.",
          icon: "success",
          timer: 2000,
          showConfirmButton: false
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Failed to delete contact. Please try again.",
        icon: "error",
        confirmButtonColor: "#3085d6"
      });
    }
  };


  useEffect(() => {
    // Simulate API call
    fetchcontectdata();
  }, []);

  // Filter contacts based on search and status
  const filteredContacts = contacts.filter((contact) => {
    const matchesSearch =
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.subject.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || contact.status === statusFilter;

    return matchesSearch && matchesStatus;
  });



  const markAsRead = (id) => {
    setContacts(
      contacts.map((contact) =>
        contact.id === id ? { ...contact, status: "read" } : contact
      )
    );
    if (selectedContact && selectedContact.id === id) {
      setSelectedContact({ ...selectedContact, status: "read" });
    }
  };

  const markAllAsRead = () => {
    setContacts(contacts.map((contact) => ({ ...contact, status: "read" })));
    if (selectedContact) {
      setSelectedContact({ ...selectedContact, status: "read" });
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      {/* Header */}
      <div className="mb-6 md:mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Contact Submissions
            </h1>
            <p className="text-gray-600 mt-1">
              Manage all contact form submissions from your website
            </p>
          </div>

          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <div className="flex items-center space-x-2">
              <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                Total: {contacts.length}
              </span>
              <span className="bg-red-100 text-red-800 text-sm px-3 py-1 rounded-full">
                New: {contacts.filter((c) => c.status === "new").length}
              </span>
            </div>

            {contacts.some((c) => c.status === "new") && (
              <button
                onClick={markAllAsRead}
                className="bg-gradient-to-r from-[#880481] via-[#30085b] to-[#ad6bac] hover:from-[#9a0591] hover:via-[#3a096b] hover:to-[#bd7bbc] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-lg"
              >
                Mark All Read
              </button>
            )}
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search contacts by name, email, or subject..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          >
            <option value="all">All Status</option>
            <option value="new">New</option>
            <option value="read">Read</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Contact List */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">
              Contact List{" "}
              {filteredContacts.length > 0 && `(${filteredContacts.length})`}
            </h2>
          </div>

          <div className="overflow-y-auto max-h-[600px]">
            {filteredContacts.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">📭</div>
                <p className="text-gray-500 text-lg">No contacts found</p>
                <p className="text-gray-400 text-sm mt-1">
                  {searchTerm || statusFilter !== "all"
                    ? "Try adjusting your filters"
                    : "No contact submissions yet"}
                </p>
              </div>
            ) : (
              filteredContacts.map((contact) => (
                <div
                  key={contact._id}
                  className={`border-b border-gray-100 p-4 cursor-pointer transition-colors hover:bg-gray-50 ${selectedContact?._id === contact._id
                    ? "bg-blue-50 border-l-4 border-l-blue-500"
                    : ""
                    } ${contact.status === "new" ? "bg-orange-50" : ""}`}
                  onClick={() => setSelectedContact(contact)}
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                        {getInitials(contact.name)}
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold text-gray-900 truncate">
                          {contact.name}
                        </h3>
                        <div className="flex items-center space-x-2">
                          {contact.status === "new" && (
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                              New
                            </span>
                          )}
                          <span className="text-xs text-gray-500">
                            {formatDate(contact.date)}
                          </span>
                        </div>
                      </div>

                      <p className="text-sm font-medium text-gray-900 mb-1 truncate">
                        {contact.subject}
                      </p>

                      <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                        {contact.message}
                      </p>

                      <div className="flex items-center justify-between">
                        <p className="text-sm text-blue-600 truncate">
                          {contact.email}
                        </p>

                        <div className="flex space-x-2">
                          {contact.status === "new" && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                markAsRead(contact.id);
                              }}
                              className="text-xs bg-orange-100 text-orange-800 hover:bg-orange-200 px-2 py-1 rounded transition-colors"
                            >
                              Mark Read
                            </button>
                          )}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              deleteContact(contact._id);
                            }}
                            className="text-xs bg-red-100 text-red-800 hover:bg-red-200 px-2 py-1 rounded transition-colors"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Contact Detail */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {selectedContact ? (
            <>
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-gray-900">
                    Contact Details
                  </h2>
                  <button
                    onClick={() => setSelectedContact(null)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="p-6 space-y-6 overflow-y-auto max-h-[500px]">
                {/* Header */}
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-xl">
                    {getInitials(selectedContact.name)}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {selectedContact.name}
                    </h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${selectedContact.status === "new"
                          ? "bg-red-100 text-red-800"
                          : "bg-green-100 text-green-800"
                          }`}
                      >
                        {selectedContact.status === "new"
                          ? "New Message"
                          : "Read"}
                      </span>
                      <span className="text-sm text-gray-500">
                        {formatDate(selectedContact.date)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-500">
                      Email
                    </label>
                    <p className="text-gray-900">
                      <a
                        href={`mailto:${selectedContact.email}`}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        {selectedContact.email}
                      </a>
                    </p>
                  </div>

                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-500">
                      Phone
                    </label>
                    <p className="text-gray-900">
                      <a
                        href={`tel:${selectedContact.phone}`}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        {selectedContact.phone}
                      </a>
                    </p>
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-500">
                    Subject
                  </label>
                  <p className="text-lg font-semibold text-gray-900">
                    {selectedContact.subject}
                  </p>
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-500">
                    Message
                  </label>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <p className="text-gray-900 whitespace-pre-wrap leading-relaxed">
                      {selectedContact.message}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-3 pt-4 border-t border-gray-200">
                  <button
                    onClick={() => deleteContact(selectedContact._id)}
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                    <span>Delete Contact</span>
                  </button>

                  {selectedContact.status === "new" && (
                    <button
                      onClick={() => markAsRead(selectedContact.id)}
                      className="flex-1 bg-gradient-to-r from-[#880481] via-[#30085b] to-[#ad6bac] hover:from-[#9a0591] hover:via-[#3a096b] hover:to-[#bd7bbc] text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 shadow-lg"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>Mark as Read</span>
                    </button>
                  )}
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <div className="text-gray-300 text-8xl mb-4">👆</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Select a Contact
              </h3>
              <p className="text-gray-500 max-w-sm mx-auto">
                Choose a contact from the list to view detailed information and
                manage the submission.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactManage;
