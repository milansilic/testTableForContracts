export class Client {
   cntrNum: number;
   cntrDate: string;
   fName: string;
   lName: string;
   address: string;
   PTT: number;
   city: string;
   mPhone: number;
   mail: string;
   plates: string;
   vehType: string;
   vehCol: string;
   vehicle: string;
   vehManYear: string;
   dateStart: string;
   dateEnd: string;
   pcg: string;

   constructor(
      cntrNum: number,
      cntrDate: string,
      fName: string,
      lName: string,
      address: string,
      PTT: number,
      city: string,
      mPhone: number,
      mail: string,
      plates: string,
      vehType: string,
      vehCol: string,
      vehicle: string,
      vehManYear: string,
      dateStart: string,
      dateEnd: string,
      pcg: string,
   ) {
      this.cntrNum = cntrNum;
      this.cntrDate = cntrDate;
      this.fName = fName;
      this.lName = lName;
      this.address = address;
      this.PTT = PTT;
      this.city = city;
      this.mPhone = mPhone;
      this.mail = mail;
      this.plates = plates;
      this.vehType = vehType;
      this.vehCol = vehCol;
      this.vehicle = vehicle;
      this.vehManYear = vehManYear;
      this.dateStart = dateStart;
      this.dateEnd = dateEnd;
      this.pcg = pcg;
   }
}