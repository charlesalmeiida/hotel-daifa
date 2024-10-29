import { CardPostMD } from "./CardPostMD"

export function RecentPosts() {
  return (
    <div className="flex flex-wrap gap-y-14 justify-between">
      {Array(3)
        .fill(0)
        .map((_, index) => (
          <CardPostMD key={index} />
        ))}
    </div>
  )
}
