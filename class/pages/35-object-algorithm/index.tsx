export default function AlgorithmPage() {
  // 배열을 객체로 만들기

  const profiles = [
    { id: 1, name: "철수" },
    { id: 2, name: "영희" },
    { id: 1, name: "훈이" },
  ];

  console.log(profiles, "profiles");

  const profiles2 = [];

  profiles.forEach((value, index) => {
    profiles2.push({ name: value.name });
  });

  console.log(profiles2, "profiles2");

  return (
    <div>
      <div>페이지입니다.</div>
    </div>
  );
}
