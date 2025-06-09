import React, { useState } from 'react';
import Typography from '../Elements/AdminSource/Typhography';
import Button from '../Elements/Button/index';
import InputText from '../Elements/Input/Input';
import Label from '../Elements/Input/Label';
import FileUpload from '../Moleculs/AdminSource/FileUpload';
import DocumentLink from '../Moleculs/AdminSource/DocumentLink';
import Icon from '../Elements/AdminSource/Icon';
import { FaTimes, FaEdit, FaSave, FaTrashAlt, FaUser, FaFile, FaEye, FaDownload } from 'react-icons/fa';

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
  fields = [],
  documentFields = [],
  showDocuments = false
}) => {
  const [activeTab, setActiveTab] = useState('info');

  if (!isOpen || !data) return null;

  // Pisahkan fields berdasarkan tipe
  const infoFields = fields.filter(field => field.type !== 'file');
  const fileFields = documentFields.length > 0 ? documentFields : fields.filter(field => field.type === 'file');

  const renderField = (field) => {
    const currentData = isEditing ? editedData : data;
    const value = currentData[field.key] || '';

    // SKIP field status secara eksplisit jika ada
    if (field.key === 'status') {
      return null;
    }

    if (field.type === 'file') {
      return isEditing ? (
        <FileUpload 
          label=""
          currentFile={value}
          onFileChange={(e) => onFileChange(field.key, e)}
          accept={field.accept}
        />
      ) : (
        <div className="flex items-center justify-between">
          <DocumentLink filename={value} />
          {value && (
            <div className="flex gap-2 ml-2">
              <button
                onClick={() => window.open(`/documents/${value}`, '_blank')}
                className="text-blue-600 hover:text-blue-800 p-1"
                title="Lihat file"
              >
                <Icon icon={FaEye} size="sm" />
              </button>
              <button
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = `/documents/${value}`;
                  link.download = value;
                  link.click();
                }}
                className="text-green-600 hover:text-green-800 p-1"
                title="Download file"
              >
                <Icon icon={FaDownload} size="sm" />
              </button>
            </div>
          )}
        </div>
      );
    }

    if (field.type === 'textarea') {
      return (
        <textarea 
          value={value}
          onChange={(e) => isEditing && onInputChange(field.key, e.target.value)}
          className={`w-full p-1.5 border rounded mt-1 text-sm ${!isEditing ? 'bg-gray-50' : ''}`}
          rows="3"
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
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg mx-auto max-h-[85vh] overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <div className="flex items-center gap-3">
            <Typography variant="h3">{title}</Typography>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <Icon icon={FaTimes} size="md" />
          </button>
        </div>

        {/* Tab Navigation - hanya tampil jika ada dokumen */}
        {showDocuments && fileFields.length > 0 && (
          <div className="border-b border-gray-200">
            <nav className="flex space-x-6 px-4">
              <button
                onClick={() => setActiveTab('info')}
                className={`py-3 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'info'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Icon icon={FaUser} size="sm" className="inline mr-2" />
                Informasi Peserta
              </button>
              <button
                onClick={() => setActiveTab('documents')}
                className={`py-3 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'documents'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Icon icon={FaFile} size="sm" className="inline mr-2" />
                Dokumen
              </button>
            </nav>
          </div>
        )}
        
        {/* Content */}
        <div className="p-4 max-h-60 overflow-y-auto">
          {/* Tab Info - Informasi Peserta */}
          {(!showDocuments || activeTab === 'info') && (
            <div className="space-y-3">
              {infoFields.map((field, index) => (
                <div key={index}>
                  <Label htmlFor={field.key}>{field.label}</Label>
                  {renderField(field)}
                </div>
              ))}
            </div>
          )}

          {/* Tab Documents - File Dokumen */}
          {showDocuments && activeTab === 'documents' && (
            <div className="space-y-3">
              <Typography variant="h4" className="mb-3">Dokumen Peserta</Typography>
              {fileFields.length > 0 ? (
                <div className="space-y-3">
                  {fileFields.map((field, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-3 border">
                      <Label htmlFor={field.key} className="font-medium text-gray-700 mb-2 block">
                        {field.label}
                      </Label>
                      {renderField(field)}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-6 text-gray-500">
                  <Icon icon={FaFile} size="lg" className="mx-auto mb-2 opacity-50" />
                  <p>Tidak ada dokumen tersedia</p>
                </div>
              )}
            </div>
          )}

          {/* Fallback - jika tidak ada showDocuments tapi ada file fields */}
          {!showDocuments && fileFields.length > 0 && activeTab === 'info' && (
            <div className="space-y-3 mt-4">
              <hr className="my-4" />
              <Typography variant="h4" className="mb-3">Dokumen</Typography>
              {fileFields.map((field, index) => (
                <div key={index}>
                  <Label htmlFor={field.key}>{field.label}</Label>
                  {renderField(field)}
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Footer Actions */}
        <div className="flex justify-between items-center p-4 border-t bg-gray-50">
          <div className="flex gap-2">
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
              <Button onClick={onEdit} variant="primary" size="sm" className="flex items-center gap-1">
                <Icon icon={FaEdit} size="sm" color="white" />
                Edit
              </Button>
            )}
          </div>
          
          <div className="flex gap-2">
            {onDelete && !isEditing && (
              <Button onClick={onDelete} variant="danger" size="sm" className="flex items-center gap-1">
                <Icon icon={FaTrashAlt} size="sm" color="white" />
                Hapus
              </Button>
            )}
            <Button onClick={onClose} variant="secondary" size="sm">
              Tutup
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;