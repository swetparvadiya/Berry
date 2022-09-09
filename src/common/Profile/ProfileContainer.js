import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProfileContainer = () => {
  const navigate = useNavigate;

  const logout = () => {
    navigate("/");
  };

  const [sdm, setSdm] = useState(true);
  const [value, setValue] = useState("");
  const [notification, setNotification] = useState(false);
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  return {
    handleClose,
    handleToggle,
    anchorRef,
    open,
    value,
    setValue,
    sdm,
    setSdm,
    notification,
    setNotification,
    logout,
  };
};
export default ProfileContainer;
