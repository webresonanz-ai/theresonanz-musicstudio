import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useTrmsStore = defineStore('trms', () => {
  const profile = ref({
    name: 'TRMS Music Academy',
    tagline: 'The Resonanz Music Studio telah bergerak dalam pembinaan & pendidikan musik sejak Desember 2007',
    description: `    Konser-konser berskala besar dan sedang telah digelar secara rutin dan konsisten oleh The Resonanz Music Studio bersama dengan dukungan pihak-puhak yang peduli akan kemajuan dan pengembangan musik khususnya musik klasik di Indonesia.
    
    Sebagai Salah Satu pusat pembinaan dan pendidikan musik yang paling aktif, The Resonanz Music Studio berpartner dengan Jakarta Concert Orchestra, Batavia Madrigal Singers dan mewadahi The Resonanz Children's Choir. Tidak hanya itu saja, The Resonanz Music Studio memiliki Hall Balai Resital Kertanegara sebagai sarana kebutuhan resital dan acara musik, serta membuka kesempatan kepada masyarakat untuk dapat belajar musik secara baik dan benar dengan dukungan pengajar dan fasilitas dengan standar terbaik.`,
    logo: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=200&h=200&fit=crop',
    phone: '+1 (555) 123-4567',
    email: 'info@trms.academy',
    address: '123 Music Avenue, Harmony City',
    social: {
      facebook: '#',
      twitter: '#',
      instagram: '#'
    }
  })

  const courses = ref([
    {
      id: 1,
      name: 'Piano Fundamentals',
      category: 'Instrumental',
      duration: '12 weeks',
      level: 'Beginner',
      price: 450,
      instructor: 'Dr. Elena Voss',
      schedule: 'Mon, Wed 4:00-5:30 PM'
    },
    {
      id: 2,
      name: 'Vocal Mastery',
      category: 'Vocal',
      duration: '16 weeks',
      level: 'All Levels',
      price: 520,
      instructor: 'Sofia Ramirez',
      schedule: 'Tue, Thu 6:00-7:30 PM'
    },
    {
      id: 3,
      name: 'Jazz Improvisation',
      category: 'Jazz',
      duration: '14 weeks',
      level: 'Intermediate',
      price: 480,
      instructor: 'Marcus Chen',
      schedule: 'Sat 10:00-12:00 PM'
    }
  ])

  const courseFees = ref([
    { id: 1, type: 'Individual Lesson', price: 65, unit: 'per hour' },
    { id: 2, type: 'Group Lesson', price: 45, unit: 'per hour' },
    { id: 3, type: 'Workshop', price: 150, unit: 'per session' },
    { id: 4, type: 'Masterclass', price: 200, unit: 'per session' }
  ])

  const schedules = ref([
    { day: 'Monday', hours: '9:00 AM - 8:00 PM', open: true },
    { day: 'Tuesday', hours: '9:00 AM - 8:00 PM', open: true },
    { day: 'Wednesday', hours: '9:00 AM - 8:00 PM', open: true },
    { day: 'Thursday', hours: '9:00 AM - 8:00 PM', open: true },
    { day: 'Friday', hours: '9:00 AM - 6:00 PM', open: true },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM', open: true },
    { day: 'Sunday', hours: 'Closed', open: false }
  ])

  const teachers = ref([
    {
      id: 1,
      name: 'Dr. Elena Voss',
      role: 'Piano Instructor',
      bio: 'Former principal pianist of the Berlin Symphony. Doctorate from Juilliard.',
      image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop',
      specialties: ['Classical Piano', 'Chamber Music']
    },
    {
      id: 2,
      name: 'Marcus Chen',
      role: 'Jazz Studies Lead',
      bio: 'Grammy-nominated saxophonist. Specializes in jazz improvisation.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      specialties: ['Jazz Saxophone', 'Improvisation']
    },
    {
      id: 3,
      name: 'Sofia Ramirez',
      role: 'Vocal Coach',
      bio: 'Metropolitan Opera alumna. Voice coach for Broadway performers.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
      specialties: ['Opera', 'Vocal Technique']
    }
  ])

  const news = ref([
    {
      id: 1,
      title: 'New Recording Studio Opening',
      date: '2026-06-01',
      excerpt: 'State-of-the-art recording facility now available for student projects.',
      content: 'Our new Grammy-standard recording studio is equipped with the latest technology...'
    },
    {
      id: 2,
      title: 'Summer Workshop Registration',
      date: '2026-05-15',
      excerpt: 'Summer intensive workshops now open for registration.',
      content: 'Join our week-long intensive workshops in July and August...'
    }
  ])

  const contact = ref({
    phone: '+1 (555) 123-4567',
    email: 'info@trms.academy',
    address: '123 Music Avenue, Harmony City',
    mapUrl: 'https://maps.google.com',
    officeHours: 'Mon-Fri: 9AM-6PM'
  })

  const director = ref({
    name: 'Avip Priatna',
    role: 'Director of The Resonanz Music Studio',
    bio: `    Avip Priatna adalah pendiri Jakarta Concert Orchestra, Batavia Madrigal Singers, The Resonanz Children's Choir & The REsonanz Music Studio.
    
    Saat ini, Avip adalah Direktur Musik dan Konduktor Jakarta Concert Orchestra (JCO) dan Batavia Madrigal Singers (BMS). Dengan JCO, Avip bertujuan untuk membawa musik simfoni, baik simfoni orkestra maupun simfoni vokal lebih dekat kepada masyarakat. Dia juga aktif sebagai pengajar vokal di The Resonanz Music Studio.
    
    Prestasi yang telah diraihnya adalah Premio a la Mejor Direccion "Jose Hodar Talavera", yaitu gelar Konduktor Terbaik dalam kompetisi paduan suara internasional 57 Certamen Internacional De Habaneras Y Polifonia yang diselenggarakan di Torrevieja, Spanyol, pada bulan Juli 2011.`,
    image: 'https://cdn.tatlerasia.com/tatlerasia/i/2025/11/06193821-avip-priatna-7_cover_1069x1600.JPG'
  })

  const facilities = ref([
    { id: 1, name: 'Main Concert Hall', icon: 'bi bi-building', description: 'Acoustically designed venue for 300 guests' },
    { id: 2, name: 'Recording Studio', icon: 'bi bi-mic', description: 'Professional-grade recording facilities' },
    { id: 3, name: 'Practice Rooms', icon: 'bi bi-music-note', description: '20 soundproof individual practice rooms' },
    { id: 4, name: 'Library', icon: 'bi bi-book', description: 'Extensive music collection and study area' }
  ])

  const galleryImages = ref([
    'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800&h=600&fit=crop'
  ])

  const organizations = ref([
    { name: 'TRMS', icon: 'bi bi-house-door-fill' },
    { name: 'BMS', icon: 'bi bi-diagram-3' },
    { name: 'TRCC', icon: 'bi bi-music-note-list' },
    { name: 'JCO', icon: 'bi bi-people' }
  ])

  return {
    profile,
    courses,
    courseFees,
    schedules,
    teachers,
    news,
    contact,
    director,
    facilities,
    galleryImages,
    organizations
  }
})

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