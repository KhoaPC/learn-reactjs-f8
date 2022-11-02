import Button from "../module-style";

export default function AppStyle({title}) {
  document.title = title;
  return (
    <div>
      <Button active></Button>
      <Button></Button>
      <Button disable></Button>
      <Button active></Button>
    </div>
  );
}
