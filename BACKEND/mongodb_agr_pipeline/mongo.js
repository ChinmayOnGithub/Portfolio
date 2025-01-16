import { mongoose } from 'mongoose';

const pipeline = [
  // what is the average number of tags per user?
  {
    $unwind: "$tags",
  },
  {
    $group: {
      _id: "$_id",
      numberOfTags: {
        $sum: 1,
      },
    },
  },
  {
    $group: {
      _id: null,
      averageTags: {
        $avg: "$numberOfTags"
      }
    }
  }
]

const pipeline2 = [
  {
    $addFields: {
      numberOfTags: {
        $size: { $ifNull: ["$tags", []] }
      }
    }
  },
  {
    $group: {
      _id: null,
      averageOfTags: {
        $avg: "$numberOfTags"
      }
    }
  }
]

const enimAsTag =
  [
    // how many users have enim as tag?
    {
      $match: {
        tags: "enim"
      }
    },
    {
      $count: 'usersWithEnimTag'
    }
  ]

const projectAndMatch = [
  {
    $match: {
      tags: 'velit',
      isActive: false,
    }
  },
  {

    $project: {
      name: 1,
      age: 1
    }
  }
]


// using RegexMongoDB aggregation pattern matching
const phoneNumberPatterMatching = [
  {
    $match: {
      "company.phone": /^\+1 \(940\)/
    }
  },
  {
    $count: 'patternMatched'
  }
]

const whoRegisteredLatest = [
  {
    $sort: {
      registered: -1,
    },
  },
  {
    $limit: 4,
  },
  {
    $project: {
      name: 1,
      registered: 1,
      favoriteFruit: 1,
    },
  },
]

const pushIntoArray = [
  {
    $group: {
      _id: "$favoriteFruit",
      users: {
        $push: "name",
      },
    },
  },
]


const havingBothinTags = [
  {
    $match: {
      tags: {
        $all: ["enim", "id"]
      }
    }
  }
]

const listAllComponyNamesInUSAwithUSERcount = [
  {
    $match: {
      "company.location.country": "USA",
    },
  },
  {
    $group: {
      _id: "$company.title",
      userCount: {
        $sum: 1,
      },
    },
  },
]


// learn lookup
const first = [
  {
    $lookup: {
      from: "authors",
      localField: "author_id",
      foreignField: "_id",
      as: "author_details"
    }
  },
  {
    $addFields: {
      author_details: {
        // $first: "$author_details"
        $arrayElemAt: ["$author_details", 0]
      }
    }
  }
]
