import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-full homepage">
      <div className="w-4/5 text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-5xl my-8 text-white">Explore Food From Around The World</h1>
        <Link href='/cuisines' className="shadow-gray-50 bg-gray-300 rounded text-xl py-2 px-4 cursor-pointer hover:bg-red-500 hover:text-white">
          List of Cuisines
        </Link>
      </div>
    </div>
  )
}
