export const ItemTableColumns={
   English:[ 
    {Header:'ID',accessor:'id'},
    {Header:'TITLE',accessor:'title'},
    {Header:'START_DATE',accessor:'startDate'},
    {Header:'END_DATE',accessor:'endDate'},
    {Header:'ASSIGNEE',accessor:'assignee'},
    {Header:'COST',accessor:'costString'},
    {Header:'COUNT',accessor:'countString'}],
    Hindi:[
    {Header:'ईद',accessor:'id'},
    {Header:'शीर्षक',accessor:'title'},
    {Header:'आरंभ तिथि',accessor:'startDate'},
    {Header:'समाप्ति तिथि',accessor:'endDate'},
    {Header:'संपत्ति-भागी',accessor:'assignee'},
    {Header:'लागत',accessor:'costString'},
    {Header:'गिनती',accessor:'countString'}
   ],
   Tamil:[
    {Header:'ஐடி',accessor:'id'},
    {Header:'தலைப்பு',accessor:'title'},
    {Header:'தொடக்க தேதி',accessor:'startDate'},
    {Header:'கடைசி தேதி',accessor:'endDate'},
    {Header:'ஒதுக்குபவர்',accessor:'assignee'},
    {Header:'செலவு',accessor:'costString'},
    {Header:'எண்ணிக்கை',accessor:'countString'}
   ]
}
export const MasterTableColumns={
   English:[
      {Header:'S.NO',accessor:'serialNumber'},
      {Header:'ID',accessor:'id'},
      {Header:'TITLE',accessor:'title'},
      {Header:'CRD DATE',accessor:'endDate'},
      {Header:'STATUS',accessor:'color'}
   ],
   Hindi:[
      {Header:'क्रमिक संख्या',accessor:'serialNumber'},
      {Header:'ईद',accessor:'id'},
      {Header:'शीर्षक',accessor:'title'},
      {Header:'CRD दिनांक',accessor:'endDate'},
      {Header:'स्थिति',accessor:'color'}
   ],
   Tamil:[
      {Header:'வரிசை எண்',accessor:'serialNumber'},
      {Header:'ஐடி',accessor:'id'},
      {Header:'தலைப்பு',accessor:'title'},
      {Header:'CRD தேதி',accessor:'endDate'},
      {Header:'நிலை',accessor:'color'}
   ]
}
