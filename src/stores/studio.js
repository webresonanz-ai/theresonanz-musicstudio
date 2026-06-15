import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useStudioStore = defineStore('studio', () => {
  // State
  const programs = ref([
    {
      id: 1,
      title: 'Classical Piano Mastery',
      category: 'Instrumental',
      description: 'Comprehensive piano training from beginner to concert level, focusing on technique, interpretation, and performance artistry.',
      duration: '12 Weeks',
      level: 'All Levels',
      icon: 'bi-music-note-beamed',
      color: '#e94560'
    },
    {
      id: 2,
      title: 'Vocal Performance Arts',
      category: 'Vocal',
      description: 'Develop your voice through classical and contemporary techniques. Includes breathing, diction, stage presence, and repertoire building.',
      duration: '16 Weeks',
      level: 'Beginner to Advanced',
      icon: 'bi-mic',
      color: '#c9a227'
    },
    {
      id: 3,
      title: 'Music Production & Engineering',
      category: 'Technology',
      description: 'Master digital audio workstations, mixing, mastering, and sound design. Learn in our state-of-the-art recording studios.',
      duration: '20 Weeks',
      level: 'Intermediate',
      icon: 'bi-sliders',
      color: '#1a1a2e'
    },
    {
      id: 4,
      title: 'Jazz Improvisation',
      category: 'Jazz',
      description: 'Explore jazz harmony, improvisation techniques, and ensemble playing. Work with seasoned jazz musicians in intimate settings.',
      duration: '14 Weeks',
      level: 'Intermediate to Advanced',
      icon: 'bi-saxophone',
      color: '#16213e'
    },
    {
      id: 5,
      title: 'Music Theory & Composition',
      category: 'Theory',
      description: 'Deep dive into harmony, counterpoint, orchestration, and composition techniques across classical and modern genres.',
      duration: '24 Weeks',
      level: 'All Levels',
      icon: 'bi-music-note-list',
      color: '#e94560'
    },
    {
      id: 6,
      title: 'Youth Orchestra Program',
      category: 'Ensemble',
      description: 'Join our prestigious youth orchestra. Rehearse weekly and perform in major venues. Open to strings, winds, brass, and percussion.',
      duration: 'Full Year',
      level: 'Intermediate to Advanced',
      icon: 'bi-people',
      color: '#c9a227'
    }
  ])

  const faculty = ref([
    {
      id: 1,
      name: 'Dr. Elena Voss',
      role: 'Artistic Director & Piano',
      bio: 'Former principal pianist of the Berlin Symphony. Doctorate from Juilliard. 25 years of teaching excellence.',
      image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop',
      specialties: ['Classical Piano', 'Chamber Music']
    },
    {
      id: 2,
      name: 'Marcus Chen',
      role: 'Head of Jazz Studies',
      bio: 'Grammy-nominated saxophonist. Toured with Herbie Hancock and Wynton Marsalis. Passionate educator.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      specialties: ['Jazz Saxophone', 'Improvisation']
    },
    {
      id: 3,
      name: 'Sofia Ramirez',
      role: 'Vocal Department Chair',
      bio: 'Metropolitan Opera alumna. Voice coach for Broadway and opera performers. Specializes in vocal health.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
      specialties: ['Opera', 'Vocal Technique']
    },
    {
      id: 4,
      name: 'James Okonkwo',
      role: 'Music Production Lead',
      bio: 'Multi-platinum producer. Worked with Universal Music and Sony. Expert in analog and digital production.',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
      specialties: ['Mixing', 'Sound Design']
    }
  ])

  const events = ref([
    {
      id: 1,
      title: 'Winter Recital Series',
      date: '2026-12-15',
      day: '15',
      month: 'Dec',
      time: '7:00 PM',
      venue: 'Concert Hall A',
      description: 'Our students showcase their progress in an evening of classical and contemporary performances.',
      category: 'Recital'
    },
    {
      id: 2,
      title: 'Jazz Night: Live Jam Session',
      date: '2026-12-22',
      day: '22',
      month: 'Dec',
      time: '8:00 PM',
      venue: 'Blue Note Lounge',
      description: 'Open stage for jazz enthusiasts. Bring your instrument or just enjoy the music.',
      category: 'Performance'
    },
    {
      id: 3,
      title: 'Masterclass: The Art of Fugue',
      date: '2027-01-10',
      day: '10',
      month: 'Jan',
      time: '3:00 PM',
      venue: 'Master Studio',
      description: 'Intensive workshop on Bach\'s contrapuntal techniques with Dr. Elena Voss.',
      category: 'Workshop'
    },
    {
      id: 4,
      title: 'Spring Orchestra Gala',
      date: '2027-03-20',
      day: '20',
      month: 'Mar',
      time: '7:30 PM',
      venue: 'Grand Auditorium',
      description: 'Annual gala featuring our youth orchestra and guest soloists performing symphonic masterpieces.',
      category: 'Concert'
    }
  ])

  const gallery = ref([
    'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=600&h=400&fit=crop'
  ])

  const stats = ref({
    students: 1240,
    faculty: 48,
    programs: 36,
    concerts: 156,
    awards: 89,
    years: 15
  })

  const testimonials = ref([
    {
      id: 1,
      name: 'Sarah Mitchell',
      role: 'Piano Student, 3 Years',
      text: 'Resonanz transformed my relationship with music. The faculty\'s dedication and the studio\'s atmosphere create the perfect environment for growth.',
      rating: 5
    },
    {
      id: 2,
      name: 'David Park',
      role: 'Parent of Violin Student',
      text: 'My daughter has flourished here. The youth orchestra program gave her confidence and lifelong friends who share her passion.',
      rating: 5
    },
    {
      id: 3,
      name: 'Amara Okafor',
      role: 'Music Production Graduate',
      text: 'The production facilities are world-class. I landed my first industry job thanks to the connections and portfolio I built here.',
      rating: 5
    }
  ])

  // Getters
  const programCategories = computed(() => {
    const cats = new Set(programs.value.map(p => p.category))
    return ['All', ...Array.from(cats)]
  })

  const upcomingEvents = computed(() => {
    return events.value.filter(e => new Date(e.date) >= new Date())
      .sort((a, b) => new Date(a.date) - new Date(b.date))
  })

  return {
    programs,
    faculty,
    events,
    gallery,
    stats,
    testimonials,
    programCategories,
    upcomingEvents
  }
})