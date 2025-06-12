const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-10 border-t">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* العمود الأول */}
        <div>
          <h3 className="text-lg font-bold mb-2">الشركة</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-blue-600">من نحن</a></li>
            <li><a href="#" className="hover:text-blue-600">فريق العمل</a></li>
            <li><a href="#" className="hover:text-blue-600">سياسة الخصوصية</a></li>
          </ul>
        </div>

        {/* العمود الثاني */}
        <div>
          <h3 className="text-lg font-bold mb-2">خدمات</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-blue-600">الأسئلة الشائعة</a></li>
            <li><a href="#" className="hover:text-blue-600">الدعم الفني</a></li>
            <li><a href="#" className="hover:text-blue-600">تواصل معنا</a></li>
          </ul>
        </div>

        {/* العمود الثالث */}
        <div>
          <h3 className="text-lg font-bold mb-2">روابط مهمة</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-blue-600">المدونة</a></li>
            <li><a href="#" className="hover:text-blue-600">العروض</a></li>
            <li><a href="#" className="hover:text-blue-600">المتجر</a></li>
          </ul>
        </div>

        {/* العمود الرابع */}
        <div>
          <h3 className="text-lg font-bold mb-2">تابعنا</h3>
          <div className="flex space-x-4 rtl:space-x-reverse">
            <a href="#"><img src="/icons/facebook.svg" alt="Facebook" className="w-6 h-6" /></a>
            <a href="#"><img src="/icons/twitter.svg" alt="Twitter" className="w-6 h-6" /></a>
            <a href="#"><img src="/icons/instagram.svg" alt="Instagram" className="w-6 h-6" /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 py-4 border-t">
        © {new Date().getFullYear()} جميع الحقوق محفوظة
      </div>
    </footer>
  );
};

export default Footer;
