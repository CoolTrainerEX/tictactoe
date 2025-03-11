export default function Footer() {
  return (
    <footer className="prose bg-neutral w-full max-w-full p-4">
      <p className="text-neutral-content">
        Copyright &copy; {new Date().getFullYear()} by Weirdo Productions. All
        rights reserved.
      </p>
    </footer>
  );
}
