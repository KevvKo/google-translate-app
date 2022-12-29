export interface Detection {
  isReliable: boolean;
  confidence: number;
  language: string;
}

export interface Data {
  detections: Detection[];
}

export interface DetectionResponse {
  data: Data;
}
