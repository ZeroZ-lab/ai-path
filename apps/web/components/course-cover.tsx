type CourseCoverProps = {
  entry: string
  title: string
}

export function CourseCover({ entry, title }: CourseCoverProps) {
  return (
    <div className="course-card__cover">
      <iframe
        title={`${title} cover`}
        src={entry}
        loading="lazy"
        tabIndex={-1}
        aria-hidden="true"
      />
    </div>
  )
}
