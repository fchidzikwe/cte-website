import { brand } from '@/data/site';

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/20">
      <div className="container-p py-10 text-sm grid sm:grid-cols-3 gap-6">
        <div>
          <div className="font-semibold">Cliff and Tony Energy</div>
          <div>Independent power systems engineering & grid integration consulting</div>
        </div>
        <div>
          <div className="font-semibold">Contact</div>
          <div>{brand.email}</div>
          <div>{brand.phone}</div>
          <div>{brand.address}</div>
        </div>
        <div className="opacity-70">
          © {new Date().getFullYear()} CTE. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
