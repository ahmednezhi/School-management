module.exports = mongoose => {
  const Teacher = mongoose.model(
    'teacher',
    mongoose.Schema(
      {
        name: String,
        speciality: String,
        dob: String
      },
      { timestamps: true }
    )
  );

  return Teacher;
};
