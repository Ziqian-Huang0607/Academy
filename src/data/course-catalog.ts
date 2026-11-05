import { getDatabase } from '@/database/client'
import type { CatalogCourse, CourseLevel, CoursePathway } from '@/database/types'
import { cachedShsidCatalog } from '@/data/shsid-catalog'

export type { CatalogCourse, CourseLevel, CoursePathway }

export const COURSE_LEVELS: CourseLevel[] = getDatabase().courseLevels
export const COURSE_CATALOG: CatalogCourse[] = getDatabase().courseCatalog

/**
 * The catalogue entries for these ids. Setup picks from the school's official
 * catalogue, which has courses the bundled one lacks (AP Chinese, say); those
 * resolve from the cached official list so a picked course never silently
 * disappears after setup.
 */
export function findCatalogCourses(ids: string[]): CatalogCourse[] {
  const selected = new Set(ids)
  const bundled = getDatabase().courseCatalog.filter((course) => selected.has(course.id))
  const found = new Set(bundled.map((course) => course.id))
  const official = (cachedShsidCatalog() ?? []).filter(
    (course) => selected.has(course.id) && !found.has(course.id),
  )
  return [...bundled, ...official]
}
