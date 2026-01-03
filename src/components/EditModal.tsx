import { Dialog, Tabs, Tab, Box, Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import type { Connection } from "../types/connection";

type Props = {
  open: boolean;
  data: Connection | null;
  onClose: () => void;
  onSave: (data: Connection) => void;
};

const EditModal = ({ open, data, onClose, onSave }: Props) => {
  const [tab, setTab] = useState(0);
  const [formData, setFormData] = useState<Connection | null>(null);

  useEffect(() => {
    if (data) setFormData(data);
  }, [data]);

  if (!formData) return null;

  const handleChange = (field: keyof Connection, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      sx={{ direction: "rtl" }}
    >
      <Box p={3}>
        <Tabs value={tab} onChange={(_, v) => setTab(v)}>
          <Tab label="اطلاعات متقاضی" />
          <Tab label="اطلاعات تقاضا" />
        </Tabs>

        {/* TAB 1 */}
        {tab === 0 && (
          <Box mt={3} display="grid" gap={2}>
            <TextField
              label="نام"
              value={formData.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
              fullWidth
              InputLabelProps={{
                sx: {
                  right: 30,
                  left: "auto",
                  transformOrigin: "top right",
                  textAlign: "right",
                },
              }}
              inputProps={{
                style: { textAlign: "right" },
                dir: "rtl",
              }}
            />
            <TextField
              label="نام خانوادگی"
              value={formData.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
              fullWidth
              InputLabelProps={{
                sx: {
                  right: 30,
                  left: "auto",
                  transformOrigin: "top right",
                  textAlign: "right",
                },
              }}
              inputProps={{
                style: { textAlign: "right" },
                dir: "rtl",
              }}
            />
            <TextField
              label="نام پدر"
              value={formData.fatherName}
              onChange={(e) => handleChange("fatherName", e.target.value)}
              fullWidth
              InputLabelProps={{
                sx: {
                  right: 30,
                  left: "auto",
                  transformOrigin: "top right",
                  textAlign: "right",
                },
              }}
              inputProps={{
                style: { textAlign: "right" },
                dir: "rtl",
              }}
            />
            <TextField
              label="شماره ملی"
              value={formData.nationalId}
              onChange={(e) => handleChange("nationalId", e.target.value)}
              fullWidth
              InputLabelProps={{
                sx: {
                  right: 30,
                  left: "auto",
                  transformOrigin: "top right",
                  textAlign: "right",
                },
              }}
              inputProps={{
                style: { textAlign: "right" },
                dir: "rtl",
              }}
            />
          </Box>
        )}

        {/* TAB 2 */}
        {tab === 1 && (
          <Box mt={3} display="grid" gap={2}>
            <TextField
              label="نوع انشعاب"
              value={formData.connectionType}
              onChange={(e) => handleChange("connectionType", e.target.value)}
              fullWidth
              InputLabelProps={{
                sx: {
                  right: 30,
                  left: "auto",
                  transformOrigin: "top right",
                  textAlign: "right",
                },
              }}
              inputProps={{
                style: { textAlign: "right" },
                dir: "rtl",
              }}
            />
            <TextField
              label="شماره درخواست"
              value={formData.requestNumber}
              onChange={(e) => handleChange("requestNumber", e.target.value)}
              fullWidth
              InputLabelProps={{
                sx: {
                  right: 30,
                  left: "auto",
                  transformOrigin: "top right",
                  textAlign: "right",
                },
              }}
              inputProps={{
                style: { textAlign: "right" },
                dir: "rtl",
              }}
            />
            <TextField
              label="نوع تعرفه"
              value={formData.tariffType}
              onChange={(e) => handleChange("tariffType", e.target.value)}
              fullWidth
              InputLabelProps={{
                sx: {
                  right: 30,
                  left: "auto",
                  transformOrigin: "top right",
                  textAlign: "right",
                },
              }}
              inputProps={{
                style: { textAlign: "right" },
                dir: "rtl",
              }}
            />
            <TextField
              label="تاریخ شروع خدمات"
              value={formData.startDate}
              onChange={(e) => handleChange("startDate", e.target.value)}
              fullWidth
              InputLabelProps={{
                sx: {
                  right: 30,
                  left: "auto",
                  transformOrigin: "top right",
                  textAlign: "right",
                },
              }}
              inputProps={{
                style: { textAlign: "right" },
                dir: "rtl",
              }}
            />
          </Box>
        )}

        <Box mt={4} display="flex" justifyContent="flex-end" gap={2}>
          <Button onClick={onClose}>انصراف</Button>
          <Button variant="contained" onClick={() => onSave(formData)}>
            ذخیره
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
};

export default EditModal;
