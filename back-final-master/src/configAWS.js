import { S3Client } from "@aws-sdk/client-s3";

// Inicialize o cliente S3 com as credenciais e região corretas
const s3Client = new S3Client({
  region: '',
  credentials: { 
      accessKeyId: '',
      secretAccessKey: '' 
  }
});

export default s3Client
