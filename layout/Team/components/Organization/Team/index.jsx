import Member from "../Member";

export default function Team({ title, list }) {
  return (
    <div>
      <h3 className="font-terminal-uppercase mb-4 text-white">{title}</h3>
      <div className="grid grid-cols-2 justify-items-center gap-8">
        {list.map((member) => (
          <Member key={member.name} {...member} />
        ))}
      </div>
    </div>
  );
}
