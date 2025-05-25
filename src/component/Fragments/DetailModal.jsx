import React from 'react';
import Typography from '../Elements/AdminSource/Typhography';
import Button from '../Elements/Button/index';
import InputText from '../Elements/Input/Input';
import Label from '../Elements/Input/Label';
import FileUpload from '../Moleculs/AdminSource/FileUpload';
import DocumentLink from '../Moleculs/AdminSource/DocumentLink';
import Icon from '../Elements/AdminSource/Icon';
import { FaTimes, FaEdit, FaSave, FaTrashAlt } from 'react-icons/fa';

const DetailModal = ({ 
  isOpen, 
  onClose, 
  title, 
  data, 
  isEditing, 
  editedData, 
  onEdit, 
  onSave, 
  onCancel, 
  onDelete, 
  onInputChange,
  onFileChange,
  fields = []
}) => {
  if (!isOpen || !data) return null;

  const renderField = (field) => {
    const currentData = isEditing ? editedData : data;
    const value = currentData[field.key] || '';

    if (field.type === 'file') {
      return isEditing ? (
        <FileUpload 
          label=""
          currentFile={value}
          onFileChange={(e) => onFileChange(field.key, e)}
          accept={field.accept}
        />
      ) : (
        <DocumentLink filename={value} />
      );
    }

    if (field.type === 'textarea') {
      return (
        <textarea 
          value={value}
          onChange={(e) => isEditing && onInputChange(field.key, e.target.value)}
          className={`w-full p-1.5 border rounded mt-1 text-sm ${!isEditing ? 'bg-gray-50' : ''}`}
          rows="2"
          readOnly={!isEditing || field.readonly}
        />
      );
    }

    if (field.type === 'select') {
      return (
        <select
          value={value}
          onChange={(e) => isEditing && onInputChange(field.key, e.target.value)}
          className={`w-full p-1.5 border rounded mt-1 text-sm ${!isEditing ? 'bg-gray-50' : ''}`}
          disabled={!isEditing || field.readonly}
        >
          {field.options?.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      );
    }

    if (field.render) {
      return field.render(currentData, isEditing, onInputChange);
    }

    return (
      <input
        type={field.type || 'text'}
        value={value}
        onChange={(e) => isEditing && onInputChange(field.key, e.target.value)}
        className={`w-full p-1.5 border rounded mt-1 text-sm ${!isEditing || field.readonly ? 'bg-gray-50' : ''}`}
        readOnly={!isEditing || field.readonly}
      />
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-md mx-auto">
        <div className="flex justify-between items-center mb-3">
          <Typography variant="h3">{title}</Typography>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <Icon icon={FaTimes} size="md" />
          </button>
        </div>
        
        <div className="space-y-3 mb-4 max-h-80 overflow-y-auto pr-1">
          {fields.map((field, index) => (
            <div key={index}>
              <Label htmlFor={field.key}>{field.label}</Label>
              {renderField(field)}
            </div>
          ))}
        </div>
        
        <div className="flex justify-end gap-2">
          {isEditing ? (
            <>
              <Button onClick={onCancel} variant="secondary" size="sm">
                Batal
              </Button>
              <Button onClick={onSave} variant="primary" size="sm" className="flex items-center gap-1">
                <Icon icon={FaSave} size="sm" color="white" />
                Simpan
              </Button>
            </>
          ) : (
            <>
              {onDelete && (
                <Button onClick={onDelete} variant="danger" size="sm" className="flex items-center gap-1">
                  <Icon icon={FaTrashAlt} size="sm" color="white" />
                  Hapus
                </Button>
              )}
              <Button onClick={onEdit} variant="primary" size="sm" className="flex items-center gap-1">
                <Icon icon={FaEdit} size="sm" color="white" />
                Edit
              </Button>
              <Button onClick={onClose} variant="secondary" size="sm">
                Tutup
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailModal;