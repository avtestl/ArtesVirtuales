const WhatsappBUtton = ({whatsapp}) => {
  return <a href={whatsapp} target="_blank" className="fixed bottom-4 right-6" >
    <img src="/whatsapp.svg" alt="whatsapp" width={50} height={50} />
  </a>
}


export default WhatsappBUtton