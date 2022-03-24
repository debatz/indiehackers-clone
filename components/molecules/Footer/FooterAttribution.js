export default function FooterAttribution() {
  return (
    <div className="flex space-x-2">
      <img
        className="w-6 h-6"
        src="/indiehackerslogo.svg"
        alt="IndieHackers Logo"
      ></img>
      <p className="flex items-center space-x-2">
        <span className="font-semibold text-white">INDIE HACKERS</span>
        <span className="text-[#9cb3c9]">by</span>
        <span className="bg-[#1e99e6] text-white font-semibold py-0.5 px-1.5 rounded-sm text-xs">
          @csallen
        </span>
        <span className="text-[#9cb3c9]">at</span>
        <svg
          className="w-12"
          viewBox="0 0 61 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 10.1C4 9.50005 4.6 9.20005 5.4 9.20005C6.6 9.20005 8.2 9.60005 9.4 10.3V6.50005C8.1 6.00005 6.7 5.70005 5.4 5.70005C2.2 5.70005 0 7.40005 0 10.3C0 14.7 6 13.9 6 15.9C6 16.6 5.4 16.9 4.5 16.9C3.2 16.9 1.5 16.3 0.2 15.6V19.4C1.7 20 3.1 20.3 4.5 20.3C7.8 20.3 10 18.7 10 15.8C10.1 11 4 11.9 4 10.1V10.1ZM28.9 20H32.9V6.00005H28.9V20ZM15.3 2.70005L11.4 3.50005V16.1C11.4 18.5 13.2 20.2001 15.5 20.2001C16.8 20.2001 17.8 20.0001 18.3 19.7001V16.5C17.8 16.7 15.3 17.4 15.3 15.1V9.40005H18.3V6.00005H15.3V2.70005ZM23.7 7.20005L23.6 6.00005H20V20H24V10.5C25 9.30005 26.7 9.50005 27.2 9.70005V6.00005C26.7 5.80005 24.7 5.50005 23.7 7.20005V7.20005ZM28.9 4.90005L32.9 4.10005V0.800049L28.9 1.60005V4.90005V4.90005ZM60.1 13C60.1 8.90005 58.1 5.70005 54.3 5.70005C50.5 5.70005 48.2 8.90005 48.2 13C48.2 17.8 50.9 20.2001 54.8 20.2001C56.7 20.2001 58.1 19.8 59.2 19.1V16C58.1 16.6 56.9 16.9 55.3 16.9C53.7 16.9 52.4 16.3 52.2 14.4H60C60.1 14.2 60.1 13.4 60.1 13V13ZM52.2 11.5C52.2 9.70005 53.3 9.00005 54.3 9.00005C55.3 9.00005 56.3 9.70005 56.3 11.5H52.2ZM41.7 5.70005C40.1 5.70005 39.2 6.40005 38.6 7.00005L38.5 6.00005H34.9V24.5L38.9 23.8V19.3C39.5 19.7 40.3 20.3 41.7 20.3C44.6 20.3 47.2 18 47.2 12.9C47.1 8.30005 44.5 5.70005 41.7 5.70005V5.70005ZM40.7 16.7C39.8 16.7 39.2 16.4 38.8 15.9V10C39.2 9.50005 39.8 9.20005 40.7 9.20005C42.2 9.20005 43.2 10.8 43.2 12.9C43.2 15.1 42.2 16.7 40.7 16.7Z"
            fill="white"
          />
        </svg>
      </p>
    </div>
  );
}
