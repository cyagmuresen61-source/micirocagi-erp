export interface FirmaBilgileri {
  id?: string;
  firmaAdi: string;
  logoUrl?: string;
  adres: string;
  telefon: string;
  vknTckn: string;
  yetkili: string;
  email?: string;
  vergiDairesi?: string;
}

export interface Cari {
  id?: string;
  unvan: string;
  vknTckn: string;
  telefon: string;
  adres: string;
  yetkili: string;
  aciklama?: string;
  bakiye: number;
  avansBakiye: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface CariHareket {
  id?: string;
  cariId: string;
  tarih: string;
  fisNo: string;
  plaka?: string;
  urun?: string;
  miktar?: number;
  birimFiyat?: number;
  borc: number;
  alacak: number;
  bakiye: number;
  hareketTuru: "kantar" | "tahsilat" | "on_odeme" | "fatura" | "irsaliye" | "diger";
  kaynakId?: string;
  aciklama?: string;
  createdAt?: string;
}

export interface KantarFisi {
  id?: string;
  tarih: string;
  fisNo: string;
  aciklama: string;
  cariId: string;
  cariUnvan?: string;
  urun: string;
  miktar: number;
  birimFiyat: number;
  kdvOrani: number;
  kdvSizFiyat: number;
  kdvLiFiyat: number;
  tahsilatYapildi?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface Tahsilat {
  id?: string;
  tarih: string;
  cariId: string;
  cariUnvan?: string;
  tutar: number;
  odemeYontemi: "nakit" | "havale" | "cek" | "diger";
  aciklama?: string;
  kantarFisId?: string;
  gelirId?: string;
  kasaId?: string;
  createdAt?: string;
}

export interface Gelir {
  id?: string;
  tarih: string;
  aciklama: string;
  cariId?: string;
  cariUnvan?: string;
  tutar: number;
  odemeYontemi: "nakit" | "havale" | "cek" | "diger";
  tahsilatId?: string;
  kasaId?: string;
  createdAt?: string;
}

export interface Gider {
  id?: string;
  tarih: string;
  aciklama: string;
  kategori: string;
  tutar: number;
  odemeYontemi: "nakit" | "havale" | "cek" | "diger";
  kasaId?: string;
  createdAt?: string;
}

export interface KasaHareket {
  id?: string;
  tarih: string;
  islemTuru: "gelir" | "gider" | "tahsilat";
  aciklama: string;
  cariId?: string;
  cariUnvan?: string;
  gelir: number;
  gider: number;
  bakiye: number;
  kaynakId?: string;
  createdAt?: string;
}

export interface Yakit {
  id?: string;
  tarih: string;
  fisNo: string;
  plaka: string;
  soforIsmi: string;
  teslimEden: string;
  saat: string;
  km: number;
  lt: number;
  birimFiyat: number;
  toplamFiyat: number;
  createdAt?: string;
}

export interface Personel {
  id?: string;
  adSoyad: string;
  tcKimlik: string;
  telefon: string;
  adres: string;
  gorev: string;
  iseGirisTarihi: string;
  durum: "aktif" | "ayrilmis";
  aciklama?: string;
  createdAt?: string;
}

export interface Izin {
  id?: string;
  personelId: string;
  personelAd?: string;
  baslangic: string;
  bitis: string;
  izinTuru: string;
  gunSayisi: number;
  aciklama?: string;
  createdAt?: string;
}

export interface IseGirisCikis {
  id?: string;
  personelId: string;
  personelAd?: string;
  iseGirisTarihi: string;
  cikisTarihi?: string;
  cikisSebebi?: string;
  aciklama?: string;
  createdAt?: string;
}

export interface Maas {
  id?: string;
  personelId: string;
  personelAd?: string;
  donem: string;
  bankadanYatan: number;
  eldenVerilen: number;
  mesaiSuresi: number;
  mesaiSaatUcreti: number;
  toplamMesaiUcreti: number;
  netMaas: number;
  createdAt?: string;
}

export interface Fatura {
  id?: string;
  tarih: string;
  faturaNo: string;
  unvan: string;
  vknTckn: string;
  urunCinsi: string;
  miktar: number;
  birimFiyat: number;
  toplamFiyat: number;
  netTutar: number;
  kdvOrani: number;
  cariId?: string;
  createdAt?: string;
}

export interface Irsaliye {
  id?: string;
  tarih: string;
  irsaliyeNo: string;
  unvan: string;
  vknTckn: string;
  urunCinsi: string;
  miktar: number;
  birimFiyat: number;
  kdvSizTutar: number;
  kdvLiTutar: number;
  kdvOrani: number;
  cariId?: string;
  createdAt?: string;
}

export interface SevkFisi {
  id?: string;
  dosyaAdi: string;
  storagePath: string;
  downloadUrl: string;
  yuklenmeTarihi: string;
  aciklama?: string;
  createdAt?: string;
}

export interface SanayiGideri {
  id?: string;
  tarih: string;
  fisNo: string;
  aciklama: string;
  teslimAlan: string;
  miktar: number;
  fiyat: number;
  alinanOdeme: number;
  verilenOdeme: number;
  createdAt?: string;
}

export interface TesisCalisma {
  id?: string;
  tarih: string;
  iseBaslamaSaati: string;
  paydosSaati: string;
  aciklamalar: string[];
  createdAt?: string;
}
