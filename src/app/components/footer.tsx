export default function Footer() {
    return (
        <footer className="w-full bg-darkblue2 text-white py-14 px-6 lg:px-[72px] font-outfit">
            <div className="flex flex-col lg:flex-row md:flex-row gap-10">
                <div>
                    <h3 className="text-lg font-semibold mb-4">Program</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-white hover:text-graynatural">Bootcamp</a></li>
                        <li><a href="#" className="text-white hover:text-graynatural">Learning Path</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4">Corporate</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-white hover:text-graynatural">Corporate Training</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4">Tentang</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-white hover:text-graynatural">Perusahaan</a></li>
                        <li><a href="#" className="text-white hover:text-graynatural">Kontak</a></li>
                        <li><a href="#" className="text-white hover:text-graynatural">Karir</a></li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between gap-6">
                <div className="text-sm text-start md:text-left">
                    &copy; 2024 Aplus. Hak Cipta Dilindungi.
                </div>
                <div className="flex flex-col items-start md:items-end gap-4">
                    <h3>Ikuti kami</h3>
                    <div className="flex gap-4">
                        <img src="/tiktok.png" alt="TikTok" className="w-[30px] h-[30px]" />
                        <img src="/instagram (2).png" alt="Instagram" className="w-[30px] h-[30px]" />
                        <img src="/youtube.png" alt="YouTube" className="w-[30px] h-[30px]" />
                        <img src="/facebook (2).png" alt="Facebook" className="w-[30px] h-[30px]" />
                    </div>
                </div>
            </div>
        </footer>
    );
}
